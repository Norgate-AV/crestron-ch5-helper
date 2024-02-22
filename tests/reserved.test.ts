import { describe, it, expect } from "vitest";
import CrestronCH5 from "../src/index.js";

describe("Crestron CH5 Reserved Joins", () => {
    it("should import default export without error", () => {
        expect(CrestronCH5).toBeDefined();
    });

    it("should contain the correct values", () => {
        // Traverse the object and check for the correct values
        expect(
            CrestronCH5.ReservedJoin.Analog.Event.Csig_All_Audio_Volume,
        ).toBe("Csig.All_Audio_Volume");

        expect(
            CrestronCH5.ReservedJoin.Analog.Event.Csig_Auto_Answer_Delay,
        ).toBe("Csig.Auto_Answer_Delay");
    });

    it("should always pass", () => {
        expect(true).toBe(true);
    });
});
