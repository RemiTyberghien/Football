import { Routes } from '@angular/router';
import { AboutUs } from './features/About-us/components/about-us/about-us';
import { Counter } from './features/Counter/components/counter/counter';
import { Create } from './features/Player/components/create/create';
import { Details } from './features/Player/components/details/details';
import { Edit } from './features/Player/components/edit/edit';
import { List } from './features/Player/components/list/list';
import { FetchData } from './features/Weather/components/fetch-data/fetch-data';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'fetch-data' },
  { path: 'about-us', component: AboutUs, title: 'About us' },
  { path: 'counter', component: Counter, title: 'Counter' },
  { path: 'fetch-data', component: FetchData, title: 'Fetch data' },
  { path: 'players', component: List, title: 'Players' },
  { path: 'players/list', redirectTo: 'players', pathMatch: 'full' },
  { path: 'players/create', component: Create, title: 'Create player', data: { hideInNav: true } },
  { path: 'players/details/:id', component: Details, title: 'Player details', data: { hideInNav: true } },
  { path: 'players/edit/:id', component: Edit, title: 'Edit player', data: { hideInNav: true } },
];
