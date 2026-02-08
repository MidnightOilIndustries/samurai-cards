import { Component } from '@angular/core';
import { Card } from '../card/card';
import { StrikeType } from '../interfaces/strike-type';
import { allStrikes } from '../card-data/strikes/strike-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = "Samurai's Zenith";
  protected readonly StrikeType = StrikeType;

  protected readonly allStrikes = allStrikes;
}
