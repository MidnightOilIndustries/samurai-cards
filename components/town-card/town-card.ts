import { Component, Input } from '@angular/core';
import { TownCardInfo } from '../../interfaces/town-interfaces';

@Component({
  selector: 'town-card',
  standalone: true,
  templateUrl: './town-card.html',
  styleUrl: './town-card.css',
})
export class TownCard {
  @Input() townCardInfo: TownCardInfo | null = null;
}
