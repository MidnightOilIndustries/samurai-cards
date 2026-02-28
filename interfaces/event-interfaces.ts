export enum EventType {
    Quest = 'Quest',
    Event = 'Event',
}

export interface EventCardInfo {
    name: string;
    eventType: EventType;
    eventText: string;
    flavor?: string;
    imageUrl: string;
    reward?: string;
}