import { CardInfo, StrikeType } from "../../interfaces/strike-interfaces";

export const counters: CardInfo[] = [
    {
        name: "Pilfering Counter",
        power: 2,
        strikeType: StrikeType.Counter,
        rarity: "Rare",
        abilityText: "Gain 1 Yen Upon Win",
        imageUrl: "/sword2.jpg",

    },
    {
        name: "Adept Counter",
        power: 3,
        strikeType: StrikeType.Counter,
        rarity: "Uncommon",
        imageUrl: "/sword2.jpg",
    },
    {
        name: "Holy Counter",
        power: 3,
        strikeType: StrikeType.Counter,
        rarity: "Uncommon",
        abilityText: "Gain 1 Life upon Win",
        imageUrl: "/sword2.jpg",
    },
    {
        name: "Counter: Complete",
        power: 2,
        strikeType: StrikeType.Counter,
        rarity: "Rare",
        abilityText: "Deal 1 Damage to Opponent on Tie",
        imageUrl: "/sword2.jpg",
    },
];