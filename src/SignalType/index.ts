import { ObjectTypes } from "../@types/index.js";
export const SignalType = {
    Boolean: "boolean",
    Digital: "boolean",
    Number: "number",
    Analog: "number",
    String: "string",
    Serial: "string",
    Object: "object",
} as const;

export type SignalType = ObjectTypes<typeof SignalType>;

export default SignalType;
