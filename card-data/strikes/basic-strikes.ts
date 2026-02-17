import { CardInfo, StrikeType } from "../../interfaces/strike-interfaces";

export const basicStrikes: CardInfo[] = [
    {
        name: "Basic Stab",
        power: 2,
        strikeType: StrikeType.Slash,
        rarity: "Common",
        abilityText: "",
        imageUrl: "/sword2.jpg",

    },
    {
        name: "Basic Strike",
        power: 2,
        strikeType: StrikeType.Stab,
        rarity: "Common",
        abilityText: "",
        imageUrl: "/sword2.jpg",

    },
    {
        name: "Basic Counter",
        power: 2,
        strikeType: StrikeType.Counter,
        rarity: "Common",
        imageUrl: "/sword2.jpg",
    }
];
