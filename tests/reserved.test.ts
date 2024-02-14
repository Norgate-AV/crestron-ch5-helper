import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it, expect } from "vitest";
import type CrestronCH5 from "../src/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const object = (await import(
    `${path.resolve(__dirname, "../dist/index.js")}`
)) as typeof CrestronCH5;

console.log(object);

describe("Crestron CH5 Reserved Joins", () => {
    it("should import default export without error", () => {
        expect(object).toBeDefined();
    });

    it("should contain the correct values", () => {
        // Traverse the object and check for the correct values
        expect(object.ReservedJoin.Analog.Event.Csig_All_Audio_Volume).toBe(
            "Csig.All_Audio_Volume",
        );

        expect(object.ReservedJoin.Analog.Event.Csig_Auto_Answer_Delay).toBe(
            "Csig.Auto_Answer_Delay",
        );
    });

    it("should always pass", () => {
        expect(true).toBe(true);
    });
});
