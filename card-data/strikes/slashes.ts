import { CardInfo, StrikeType } from "../../interfaces/strike-type";

export const Slashs: CardInfo[] = [
    {
        name: "Adept Slash",
        power: 4,
        strikeType: StrikeType.Slash,
        rarity: "Uncommon",
        imageUrl: "/Sword1.jpg",
    },
    {
        name: "Slash of Overwhelming Force",
        power: 4,
        strikeType: StrikeType.Slash,
        rarity: "Mythic",
        abilityText: "Destroy the Opponent's Card on Win",
        imageUrl: "/Sword1.jpg",
    },
    {
        name: "Slash: Complete",
        power: 2,
        strikeType: StrikeType.Slash,
        rarity: "Rare",
        abilityText: "Deal 1 Damage to Opponent on Tie",
        imageUrl: "/Sword1.jpg",
    },
];