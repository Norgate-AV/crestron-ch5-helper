import { describe, it, expect } from "vitest";
import { getCh5ReservedJoins } from "@norgate-av/ch5-join-getter";
import CrestronCH5 from "../src/index.js";

describe("Check CH5 Joins", () => {
    it("should match the latest available reserved joins", async () => {
        const data = await getCh5ReservedJoins();

        expect(data).toBeDefined();
        expect(data).toEqual(CrestronCH5.ReservedJoin);
    });

    it("should always pass", () => {
        expect(true).toBe(true);
    });
});
