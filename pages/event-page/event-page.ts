import { Component } from '@angular/core';
import { EventType } from '../../interfaces/event-interfaces';
import { allEvents } from '../../card-data/events/event-data';
import { EventCard } from '../../components/event-card/event-card';

@Component({
    selector: 'event-page',
    standalone: true,
    imports: [EventCard],
    templateUrl: './event-page.html',
    styleUrl: './event-page.css',
})
export class EventPage {
    protected readonly title = "Samurai's Zenith";
    protected readonly EventType = EventType;

    protected readonly allEvents = allEvents;
}
