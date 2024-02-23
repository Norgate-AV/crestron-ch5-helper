import { describe, it, expect } from "vitest";
import CrestronCH5, {
    AnalogEvent,
    AnalogState,
    DigitalEvent,
    DigitalState,
    SerialEvent,
    SerialState,
    SignalType,
} from "../src/index.js";

describe("Crestron CH5 Helper", () => {
    it("should import default export without error", () => {
        expect(CrestronCH5).toBeDefined();
    });

    describe("ReservedJoin", () => {
        describe("Analog", () => {
            describe("Event", () => {
                it("should contain the correct values", () => {
                    for (const key of Object.keys(
                        CrestronCH5.ReservedJoin.Analog.Event,
                    )) {
                        const value = key.replace(/^Csig_/, "Csig.");

                        expect(
                            CrestronCH5.ReservedJoin.Analog.Event[
                                key as keyof typeof AnalogEvent
                            ],
                        ).toBe(value);
                    }
                });
            });

            describe("State", () => {
                it("should contain the correct values", () => {
                    for (const key of Object.keys(
                        CrestronCH5.ReservedJoin.Analog.State,
                    )) {
                        const value = key.replace(/^Csig_/, "Csig.");

                        expect(
                            CrestronCH5.ReservedJoin.Analog.State[
                                key as keyof typeof AnalogState
                            ],
                        ).toBe(value);
                    }
                });
            });
        });

        describe("Digital", () => {
            describe("Event", () => {
                it("should contain the correct values", () => {
                    for (const key of Object.keys(
                        CrestronCH5.ReservedJoin.Digital.Event,
                    )) {
                        const value = key.replace(/^Csig_/, "Csig.");

                        expect(
                            CrestronCH5.ReservedJoin.Digital.Event[
                                key as keyof typeof DigitalEvent
                            ],
                        ).toBe(value);
                    }
                });
            });

            describe("State", () => {
                it("should contain the correct values", () => {
                    for (const key of Object.keys(
                        CrestronCH5.ReservedJoin.Digital.State,
                    )) {
                        const value = key.replace(/^Csig_/, "Csig.");

                        expect(
                            CrestronCH5.ReservedJoin.Digital.State[
                                key as keyof typeof DigitalState
                            ],
                        ).toBe(value);
                    }
                });
            });
        });

        describe("Serial", () => {
            describe("Event", () => {
                it("should contain the correct values", () => {
                    for (const key of Object.keys(
                        CrestronCH5.ReservedJoin.Serial.Event,
                    )) {
                        const value = key.replace(/^Csig_/, "Csig.");

                        expect(
                            CrestronCH5.ReservedJoin.Serial.Event[
                                key as keyof typeof SerialEvent
                            ],
                        ).toBe(value);
                    }
                });
            });

            describe("State", () => {
                it("should contain the correct values", () => {
                    for (const key of Object.keys(
                        CrestronCH5.ReservedJoin.Serial.State,
                    )) {
                        const value = key.replace(/^Csig_/, "Csig.");

                        expect(
                            CrestronCH5.ReservedJoin.Serial.State[
                                key as keyof typeof SerialState
                            ],
                        ).toBe(value);
                    }
                });
            });
        });
    });

    describe("SignalType", () => {
        it("should contain the correct values", () => {
            for (const key of Object.keys(CrestronCH5.SignalType)) {
                const value = key.replace(/^Csig_/, "Csig.");

                expect(
                    CrestronCH5.SignalType[key as keyof typeof SignalType],
                ).toBe(value);
            }
        });
    });

    it("should always pass", () => {
        expect(true).toBe(true);
    });
});
