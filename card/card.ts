import { Component, Input } from '@angular/core';
import { CardInfo } from '../interfaces/strike-type';

@Component({
  selector: 'strike-card',
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() cardInfo: CardInfo | null = null;
}
