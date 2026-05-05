import { Routes } from '@angular/router';
import { AboutUs } from './features/About-us/components/about-us/about-us';
import { Counter } from './features/Counter/components/counter/counter';
import { List } from './features/Player/components/list/list';
import { FetchData } from './features/Weather/components/fetch-data/fetch-data';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'fetch-data' },
    { path: 'about-us', component: AboutUs, title: 'About us' },
    { path: 'counter', component: Counter, title: 'Counter' },
    { path: 'fetch-data', component: FetchData, title: 'Fetch data' },
    { path: 'players', component: List, title: 'Players' },
];
