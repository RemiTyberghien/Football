import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  imports: [RouterModule, NgFor],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
})
export class Toolbar {
  @Input() routes: { path: string, title?: string }[] = [];
}
