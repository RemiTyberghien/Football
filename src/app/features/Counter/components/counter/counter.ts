import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  currentCount = 0;

  increment(): void {
    this.currentCount++;
  }

  decrement(): void {
    this.currentCount--;
  }

  reset(): void {
    this.currentCount = 0;
  }
}
