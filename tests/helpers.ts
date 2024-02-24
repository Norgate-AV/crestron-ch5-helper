import { expect } from "vitest";

export function assertKeyValuePairs(object: { [key: string]: string }): void {
    for (const key of Object.keys(object)) {
        const value = key
            .replace(/^Csig_/, "Csig.")
            .replace(/Star$/, "*")
            .replace(/Hash$/, "/#");

        expect(object[key]).toBe(value);
    }
}
