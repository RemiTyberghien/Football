import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { PlayerFormData } from '../../Models/player.model';
import { Position } from '../../../Position/Models/position.model';
import { PlayerService } from '../../Services/player-service';
import { PositionService } from '../../../Position/Services/position-service';

@Component({
  selector: 'app-create',
  imports: [AsyncPipe, CdkDrag, ReactiveFormsModule, RouterLink],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
  positions$: Observable<Position[]>;
  dragPosition = { x: 0, y: 0 };
  errorMessage = '';
  createForm = new FormGroup({
    shirtNo: new FormControl<number | null>(null, [Validators.required, Validators.min(1)]),
    name: new FormControl('', [Validators.required]),
    positionId: new FormControl<number | null>(null, [Validators.required]),
    positionX: new FormControl(0, [Validators.required]),
    positionY: new FormControl(0, [Validators.required]),
    appearances: new FormControl<number | null>(null, [Validators.required, Validators.min(0)]),
    goals: new FormControl<number | null>(null, [Validators.required, Validators.min(0)]),
    goalsPerMatch: new FormControl<number | null>(0, [Validators.min(0)]),
  });

  constructor(
    private playerService: PlayerService,
    private positionsService: PositionService,
    private router: Router,
  ) {
    this.positions$ = this.positionsService.getPositions();
  }

  onDragEnded(event: CdkDragEnd): void {
    const element = event.source.getRootElement();
    const parent = element.parentElement;

    if (!parent) {
      return;
    }

    const elementRect = element.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    const x = elementRect.left - parentRect.left + parent.scrollLeft;
    const y = elementRect.top - parentRect.top + parent.scrollTop;

    this.dragPosition = { x, y };
    this.createForm.patchValue({ positionX: Math.round(x), positionY: Math.round(y) });
  }

  onSubmit(): void {
    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      return;
    }

    this.playerService.createPlayer(this.toPayload()).subscribe({
      next: () => this.router.navigate(['/players']),
      error: () => {
        this.errorMessage = 'The player could not be created.';
      },
    });
  }

  private toPayload(): PlayerFormData {
    const value = this.createForm.getRawValue();

    return {
      shirtNo: Number(value.shirtNo),
      name: value.name ?? '',
      positionId: Number(value.positionId),
      appearances: Number(value.appearances),
      goals: Number(value.goals),
      positionX: Number(value.positionX),
      positionY: Number(value.positionY),
      goalsPerMatch: this.calculateGoalsPerMatch(Number(value.goals), Number(value.appearances)),
    };
  }

  private calculateGoalsPerMatch(goals: number, appearances: number): number {
    if (!appearances) {
      return 0;
    }

    return Number((goals / appearances).toFixed(2));
  }
}
