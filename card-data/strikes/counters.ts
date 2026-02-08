import { CardInfo, StrikeType } from "../../interfaces/strike-type";

export const counters: CardInfo[] = [
    {
        name: "Pilfering Counter",
        power: 2,
        strikeType: StrikeType.Counter,
        rarity: "Rare",
        abilityText: "Gain 1 Yen Upon Win",
        imageUrl: "/Sword1.jpg",

    },
    {
        name: "Adept Counter",
        power: 3,
        strikeType: StrikeType.Counter,
        rarity: "Uncommon",
        imageUrl: "/Sword1.jpg",
    },
    {
        name: "Holy Counter",
        power: 3,
        strikeType: StrikeType.Counter,
        rarity: "Uncommon",
        abilityText: "Gain 1 Life upon Win",
        imageUrl: "/Sword1.jpg",
    },
    {
        name: "Counter: Complete",
        power: 2,
        strikeType: StrikeType.Counter,
        rarity: "Rare",
        abilityText: "Deal 1 Damage to Opponent on Tie",
        imageUrl: "/Sword1.jpg",
    },
];