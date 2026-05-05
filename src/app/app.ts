import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { Toolbar } from './shared/components/toolbar/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Football');
  protected readonly routes = routes
    .filter(r => typeof r.path === 'string' && !!r.path)
    .map(r => ({ path: r.path as string, title: (r as any).title }));
}
