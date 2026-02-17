import { Routes } from '@angular/router';
import { EventPage } from '../pages/event-page/event-page';
import { StrikePage } from '../pages/strike-page/strike-page';
import { TownPage } from '../pages/town-page/town-page';

export const routes: Routes = [
	{ path: 'events', component: EventPage },
	{ path: 'strikes', component: StrikePage },
	{ path: 'towns', component: TownPage },
];
