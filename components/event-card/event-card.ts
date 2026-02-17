import { Component, Input } from '@angular/core';
import { EventCardInfo } from '../../interfaces/event-interfaces';

@Component({
  selector: 'event-card',
  standalone: true,
  templateUrl: './event-card.html',
  styleUrl: './event-card.css',
})
export class EventCard {
  @Input() eventCardInfo: EventCardInfo | null = null;
}
