import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { Player } from '../../Models/player.model';
import { Position } from '../../../Position/Models/position.model';
import { PlayerService } from '../../Services/player-service';
import { PositionService } from '../../../Position/Services/position-service';

@Component({
  selector: 'app-edit',
  imports: [AsyncPipe, CdkDrag, ReactiveFormsModule, RouterLink],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit {
  positions$: Observable<Position[]>;
  dragPosition = { x: 0, y: 0 };
  errorMessage = '';
  isLoading = true;
  playerId: number;
  editForm = new FormGroup({
    shirtNo: new FormControl<number | null>(null, [Validators.required, Validators.min(1)]),
    name: new FormControl('', [Validators.required]),
    positionId: new FormControl<number | null>(null, [Validators.required]),
    positionX: new FormControl(0, [Validators.required]),
    positionY: new FormControl(0, [Validators.required]),
    appearances: new FormControl<number | null>(null, [Validators.required, Validators.min(0)]),
    goals: new FormControl<number | null>(null, [Validators.required, Validators.min(0)]),
    goalsPerMatch: new FormControl<number | null>(null, [Validators.required, Validators.min(0)]),
  });

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private positionsService: PositionService,
    private router: Router,
  ) {
    this.playerId = Number(this.route.snapshot.paramMap.get('id'));
    this.positions$ = this.positionsService.getPositions();
    this.loadPlayer();
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
    this.editForm.patchValue({ positionX: Math.round(x), positionY: Math.round(y) });
  }

  onSubmit(): void {
    if (this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      return;
    }

    this.playerService.updatePlayer(this.toPayload()).subscribe({
      next: () => this.router.navigate(['/players']),
      error: () => {
        this.errorMessage = 'The player could not be updated.';
      },
    });
  }

  private loadPlayer(): void {
    this.playerService.getPlayer(this.playerId).subscribe({
      next: player => {
        this.editForm.patchValue({
          shirtNo: player.shirtNo,
          name: player.name,
          positionId: player.positionId,
          appearances: player.appearances,
          goals: player.goals,
          positionX: Math.round(player.positionX),
          positionY: Math.round(player.positionY),
          goalsPerMatch: player.goalsPerMatch,
        });
        this.dragPosition = { x: player.positionX, y: player.positionY };
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'The player could not be loaded.';
        this.isLoading = false;
      },
    });
  }

  private toPayload(): Player {
    const value = this.editForm.getRawValue();

    return {
      id: this.playerId,
      shirtNo: Number(value.shirtNo),
      name: value.name ?? '',
      positionId: Number(value.positionId),
      appearances: Number(value.appearances),
      goals: Number(value.goals),
      positionX: Number(value.positionX),
      positionY: Number(value.positionY),
      goalsPerMatch: Number(value.goalsPerMatch),
    };
  }
}
