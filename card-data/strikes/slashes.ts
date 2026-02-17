import { CardInfo, StrikeType } from "../../interfaces/strike-interfaces";

export const Slashs: CardInfo[] = [
    {
        name: "Adept Slash",
        power: 4,
        strikeType: StrikeType.Slash,
        rarity: "Uncommon",
        imageUrl: "/sword2.jpg",
    },
    {
        name: "Slash of Overwhelming Force",
        power: 4,
        strikeType: StrikeType.Slash,
        rarity: "Mythic",
        abilityText: "Destroy the Opponent's Card on Win",
        imageUrl: "/bloodsword.jpg",
    },
    {
        name: "Slash: Full Moon",
        power: 2,
        strikeType: StrikeType.Slash,
        rarity: "Rare",
        abilityText: "Deal 1 Damage to Opponent on Tie",
        imageUrl: "/moonsword.jpg",
    },
];