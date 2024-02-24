import { describe, it, expect } from "vitest";
import CrestronCH5 from "../src/index.js";
import { assertKeyValuePairs } from "./helpers.js";

describe("Crestron CH5 Helper", () => {
    it("should import default export without error", () => {
        expect(CrestronCH5).toBeDefined();
    });

    describe("ReservedJoin", () => {
        describe("Analog", () => {
            describe("Event", () => {
                it("should contain the correct values", () => {
                    assertKeyValuePairs(CrestronCH5.ReservedJoin.Analog.Event);
                });
            });

            describe("State", () => {
                it("should contain the correct values", () => {
                    assertKeyValuePairs(CrestronCH5.ReservedJoin.Analog.State);
                });
            });
        });

        describe("Digital", () => {
            describe("Event", () => {
                it("should contain the correct values", () => {
                    assertKeyValuePairs(CrestronCH5.ReservedJoin.Digital.Event);
                });
            });

            describe("State", () => {
                it("should contain the correct values", () => {
                    assertKeyValuePairs(CrestronCH5.ReservedJoin.Digital.State);
                });
            });
        });

        describe("Serial", () => {
            describe("Event", () => {
                it("should contain the correct values", () => {
                    assertKeyValuePairs(CrestronCH5.ReservedJoin.Serial.Event);
                });
            });

            describe("State", () => {
                it("should contain the correct values", () => {
                    assertKeyValuePairs(CrestronCH5.ReservedJoin.Serial.State);
                });
            });
        });
    });

    describe("SignalType", () => {
        it("should contain the correct values", () => {
            expect(CrestronCH5.SignalType.Boolean).toEqual("boolean");
            expect(CrestronCH5.SignalType.Digital).toEqual("boolean");
            expect(CrestronCH5.SignalType.Number).toEqual("number");
            expect(CrestronCH5.SignalType.Analog).toEqual("number");
            expect(CrestronCH5.SignalType.String).toEqual("string");
            expect(CrestronCH5.SignalType.Serial).toEqual("string");
            expect(CrestronCH5.SignalType.Object).toEqual("object");
        });
    });

    it("should always pass", () => {
        expect(true).toBe(true);
    });
});
