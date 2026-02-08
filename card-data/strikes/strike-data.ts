import { CardInfo, StrikeType } from "../../interfaces/strike-type";
import { basicStrikes } from "./basic-strikes";
import { counters } from "./counters";
import { Slashs } from "./slashes";

export const allStrikes: CardInfo[] = [
    ...basicStrikes,
    //...basicStrikes,
    ...counters,
    ...Slashs,
]