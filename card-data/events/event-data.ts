import { EventCardInfo, EventType } from "../../interfaces/event-interfaces";

export const allEvents: EventCardInfo[] = [
    {
        name: "Lantern Festival",
        eventType: EventType.Event,
        eventText: "Draw 1 card. If you control a Shrine, draw 1 more.",
        flavor: "The city glows like a promise.",
        imageUrl: "/sword2.jpg",
    },
    {
        name: "Pilgrim's Path",
        eventType: EventType.Quest,
        eventText: "Win a strike with power 4 or more to claim 2 Yen.",
        flavor: "Every mile sharpens the blade.",
        imageUrl: "/bloodsword.jpg",
    },
    {
        name: "Market Day",
        eventType: EventType.Event,
        eventText: "Trade 1 card from your hand with the top of the deck.",
        flavor: "Coin and steel change hands quickly.",
        imageUrl: "/moonsword.jpg",
    },
];
