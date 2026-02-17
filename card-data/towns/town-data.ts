import { TownCardInfo } from "../../interfaces/town-interfaces";

export const allTowns: TownCardInfo[] = [
    {
        name: "Kiyomori Harbor",
        visitOptions: [
            { description: "Spend 1 Yen to draw 1 card." },
            { description: "Trade 1 card from your hand with the top of the deck." },
        ],
        flavor: "The tide brings secrets and silver.",
        imageUrl: "/sword2.jpg",
    },
    {
        name: "Shattered Gate",
        visitOptions: [
            { description: "Heal 1 life if you won your last strike." },
            { description: "Gain 1 Yen if you lost your last strike." },
        ],
        flavor: "A monument to grudges never settled.",
        imageUrl: "/bloodsword.jpg",
    },
    {
        name: "Moonlit Market",
        visitOptions: [
            { description: "Swap a strike card in play with one in your hand." },
            { description: "Reveal the top card of the deck. You may keep it." },
        ],
        flavor: "Vendors trade in rumors as much as wares.",
        imageUrl: "/moonsword.jpg",
    },
];
