import { SignalType } from "./SignalType/index.js";
import { ReservedJoin } from "./ReservedJoin/index.js";

const CrestronCH5 = {
    SignalType,
    ReservedJoin,
} as const;

export type { AnalogEvent } from "./ReservedJoin/Analog/Event/index.js";
export type { AnalogState } from "./ReservedJoin/Analog/State/index.js";
export type { DigitalEvent } from "./ReservedJoin/Digital/Event/index.js";
export type { DigitalState } from "./ReservedJoin/Digital/State/index.js";
export type { SerialEvent } from "./ReservedJoin/Serial/Event/index.js";
export type { SerialState } from "./ReservedJoin/Serial/State/index.js";
export type { SignalType } from "./SignalType/index.js";

export default CrestronCH5;
