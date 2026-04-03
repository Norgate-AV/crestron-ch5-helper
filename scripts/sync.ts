import { getCh5ReservedJoins } from "@norgate-av/ch5-join-getter";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = join(__dirname, "..");

const RELATIVE_IMPORT = "../../../@types/index.js";

const DRY_RUN = process.argv.includes("--dry-run");

function parseEntries(source: string): Map<string, string> {
    const entries = new Map<string, string>();
    // Handles both same-line and prettier-wrapped values:
    //   Csig_Foo: "Csig.Foo",
    //   Csig_Long:\n        "Csig.Long",
    for (const match of source.matchAll(
        /^\s+(\w+):\s*(?:\r?\n\s*)?"([^"]+)"/gm,
    )) {
        entries.set(match[1]!, match[2]!);
    }

    return entries;
}

function diffEntries(
    existing: Map<string, string>,
    upstream: Record<string, string>,
): {
    added: string[];
    removed: string[];
    changed: Array<{ key: string; from: string; to: string }>;
} {
    const upstreamKeys = new Set(Object.keys(upstream));

    return {
        added: [...upstreamKeys].filter((k) => !existing.has(k)).sort(),
        removed: [...existing.keys()]
            .filter((k) => !upstreamKeys.has(k))
            .sort(),
        changed: [...upstreamKeys]
            .filter((k) => existing.has(k) && existing.get(k) !== upstream[k])
            .sort()
            .map((k) => ({ key: k, from: existing.get(k)!, to: upstream[k]! })),
    };
}

function generateSource(
    typeName: string,
    joins: Record<string, string>,
): string {
    const lines = Object.entries(joins)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, value]) => `    ${key}: "${value}",`)
        .join("\n");

    return [
        `import { ObjectTypes } from "${RELATIVE_IMPORT}";`,
        ``,
        `export const ${typeName} = {`,
        lines,
        `} as const;`,
        ``,
        `export type ${typeName} = ObjectTypes<typeof ${typeName}>;`,
        ``,
    ].join("\n");
}

async function main(): Promise<void> {
    if (DRY_RUN) {
        console.log("Dry run — no files will be written.\n");
    }

    console.log("Fetching latest CH5 reserved joins...\n");

    const { ReservedJoin } = await getCh5ReservedJoins();

    const configs = [
        {
            typeName: "AnalogEvent",
            joins: ReservedJoin.Analog.Event as Record<string, string>,
            file: "Analog/Event",
        },
        {
            typeName: "AnalogState",
            joins: ReservedJoin.Analog.State as Record<string, string>,
            file: "Analog/State",
        },
        {
            typeName: "DigitalEvent",
            joins: ReservedJoin.Digital.Event as Record<string, string>,
            file: "Digital/Event",
        },
        {
            typeName: "DigitalState",
            joins: ReservedJoin.Digital.State as Record<string, string>,
            file: "Digital/State",
        },
        {
            typeName: "SerialEvent",
            joins: ReservedJoin.Serial.Event as Record<string, string>,
            file: "Serial/Event",
        },
        {
            typeName: "SerialState",
            joins: ReservedJoin.Serial.State as Record<string, string>,
            file: "Serial/State",
        },
    ];

    // Validate all collections before writing anything
    for (const { typeName, joins, file } of configs) {
        if (!joins || typeof joins !== "object") {
            throw new Error(
                `Upstream data missing for ${typeName} (${file}) — aborting to protect existing files.`,
            );
        }

        if (Object.keys(joins).length === 0) {
            throw new Error(
                `Upstream returned empty collection for ${typeName} (${file}) — aborting to protect existing files.`,
            );
        }
    }

    for (const { typeName, joins, file } of configs) {
        const source = generateSource(typeName, joins);
        const filePath = join(ROOT, "src", "ReservedJoin", file, "index.ts");
        const count = Object.keys(joins).length;

        const existing = readFileSync(filePath, "utf-8");
        const { added, removed, changed } = diffEntries(
            parseEntries(existing),
            joins,
        );
        const isUpToDate =
            added.length === 0 && removed.length === 0 && changed.length === 0;

        if (DRY_RUN) {
            if (isUpToDate) {
                console.log(`  - ${file} → up to date (${count} joins)`);
            } else {
                console.log(`  ~ ${file} → would update (${count} joins)`);

                for (const key of added) {
                    console.log(`      + ${key}`);
                }

                for (const key of removed) {
                    console.log(`      - ${key}`);
                }

                for (const { key, from, to } of changed) {
                    console.log(`      ~ ${key}: "${from}" → "${to}"`);
                }
            }

            continue;
        }

        if (isUpToDate) {
            console.log(`  - ${file} → up to date (${count} joins)`);
            continue;
        }

        writeFileSync(filePath, source, "utf-8");
        console.log(`  ✓ ${file} → updated (${count} joins)`);

        for (const key of added) {
            console.log(`      + ${key}`);
        }

        for (const key of removed) {
            console.log(`      - ${key}`);
        }

        for (const { key, from, to } of changed) {
            console.log(`      ~ ${key}: "${from}" → "${to}"`);
        }
    }

    console.log("\nSync complete.");
}

main().catch((error: unknown) => {
    console.error("Sync failed:", error);
    process.exit(1);
});
