import { Component } from '@angular/core';
import { allTowns } from '../../card-data/towns/town-data';
import { TownCard } from '../../components/town-card/town-card';

@Component({
    selector: 'town-page',
    standalone: true,
    imports: [TownCard],
    templateUrl: './town-page.html',
    styleUrl: './town-page.css',
})
export class TownPage {
    protected readonly title = "Samurai's Zenith";
    protected readonly allTowns = allTowns;
}
