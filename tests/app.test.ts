import { describe, it, expect } from "vitest";
import CrestronCH5 from "../src/index.js";
import { assertKeyValuePairs } from "./helpers.js";

describe("Crestron CH5 Helper", () => {
    it("should import default export without error", () => {
        expect(CrestronCH5).toBeDefined();
    });

    it("should have exactly the expected top-level keys", () => {
        expect(Object.keys(CrestronCH5)).toEqual([
            "SignalType",
            "ReservedJoin",
        ]);
    });

    describe("ReservedJoin", () => {
        it("should have exactly the expected signal type keys", () => {
            expect(Object.keys(CrestronCH5.ReservedJoin)).toEqual([
                "Digital",
                "Analog",
                "Serial",
            ]);
        });

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
        it("should have exactly 7 keys", () => {
            expect(Object.keys(CrestronCH5.SignalType)).toHaveLength(7);
        });

        it("Boolean and Digital should resolve to the same value", () => {
            expect(CrestronCH5.SignalType.Boolean).toEqual(
                CrestronCH5.SignalType.Digital,
            );
        });

        it("Number and Analog should resolve to the same value", () => {
            expect(CrestronCH5.SignalType.Number).toEqual(
                CrestronCH5.SignalType.Analog,
            );
        });

        it("String and Serial should resolve to the same value", () => {
            expect(CrestronCH5.SignalType.String).toEqual(
                CrestronCH5.SignalType.Serial,
            );
        });

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
});
