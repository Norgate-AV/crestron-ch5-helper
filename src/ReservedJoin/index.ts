import { Analog } from "./Analog/index.js";
import { Digital } from "./Digital/index.js";
import { Serial } from "./Serial/index.js";

export const ReservedJoin = {
    Digital,
    Analog,
    Serial,
} as const;

export default ReservedJoin;
