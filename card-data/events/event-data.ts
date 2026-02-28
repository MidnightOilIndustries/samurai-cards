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
    {
        name: "Weapon Delivery",
        eventType: EventType.Quest,
        eventText: "Deliver a weapon to a specified location to gain 2 Yen.",
        flavor: "Swift hands and sharp eyes ensure success.",
        imageUrl: "/moonsword.jpg",
    },
    {
        name: "Hidden Sword",
        eventType: EventType.Event,
        eventText: "Draw 2 strike cards and keep one, Discard the other.",
        flavor: "You walk up to what looked like a fight and spot see a glint within the tall grass.",
        imageUrl: "/moonsword.jpg",
    },
    {
        name: "Blacksmith's Rescue",
        eventType: EventType.Event,
        eventText: "Encounter 1 Strike Card. Draw 3 cards and keep one, Discard the others.",
        flavor: "The blacksmith is under attack by some bandits.",
        imageUrl: "/moonsword.jpg",
    },
    {
        name: "Blood for Blood",
        eventType: EventType.Quest,
        eventText: "Win a fight against a player who has beat you previously",
        flavor: "Revenge is a dish best served with steel.",
        imageUrl: "/moonsword.jpg",
        reward: "Claim 5 Yen. Gain 2 Influence."
    },
    {
        name: "Samurai Showdown",
        eventType: EventType.Quest,
        eventText: "Initiate and win a fight against a player",
        flavor: "Strike first and you won't have to strike again",
        imageUrl: "/moonsword.jpg",
        reward: "Claim 2 Yen. Gain 1 Influence."
    },
    {
        name: "Are you not entertained?",
        eventType: EventType.Quest,
        eventText: "Initiate against a player, win or lose",
        imageUrl: "/moonsword.jpg",
        reward: "Gain 1 Influence."
    },
    {
        name: "Are you not entertained?",
        eventType: EventType.Quest,
        eventText: "Initiate against a player, win or lose",
        imageUrl: "/moonsword.jpg",
        reward: "Gain 1 Influence."
    },
    {
        name: "Free Lessons At Kyoto Dojo",
        eventType: EventType.Quest,
        eventText: "Visit the Kyoto Dojo to learn new techniques.",
        flavor: "The dojo is a place of learning and growth.",
        imageUrl: "/moonsword.jpg",
        reward: "Gain 1 Strike"
    },
    {
        name: "Clairvoyance At the Springs",
        eventType: EventType.Quest,
        eventText: "Visit the Zenji springs.",
        flavor: "A calm mind sees the path ahead clearly.",
        imageUrl: "/moonsword.jpg",
        reward: "Reveal One Players Hand"
    },
];
