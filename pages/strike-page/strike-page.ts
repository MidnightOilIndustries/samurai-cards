import { Component } from '@angular/core';
import { StrikeType } from '../../interfaces/strike-interfaces';
import { allStrikes } from '../../card-data/strikes/strike-data';
import { Card } from '../../components/card/card';

@Component({
    selector: 'strike-page',
    standalone: true,
    imports: [Card],
    templateUrl: './strike-page.html',
    styleUrl: './strike-page.css',
})
export class StrikePage {
    protected readonly title = "Samurai's Zenith";
    protected readonly StrikeType = StrikeType;

    protected readonly allStrikes = allStrikes;
}
