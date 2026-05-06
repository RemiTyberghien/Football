import { Component } from '@angular/core';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Player } from '../../Models/player.model';
import { PlayerService } from '../../Services/player-service';

@Component({
  selector: 'app-list',
  imports: [AsyncPipe, DecimalPipe, RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  players$: Observable<Player[]>;
  errorMessage = '';

  constructor(private playerService: PlayerService) {
    this.players$ = this.playerService.getPlayers();
  }

  deletePlayer(player: Player): void {
    const confirmed = window.confirm(`Delete ${player.name}?`);

    if (!confirmed) {
      return;
    }

    this.playerService.deletePlayer(player.id).subscribe({
      next: () => {
        this.players$ = this.playerService.getPlayers();
      },
      error: () => {
        this.errorMessage = 'The player could not be deleted.';
      },
    });
  }
}
