import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../../Services/player-service';
import { Player } from '../../Models/player.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit {
  players: Player[] = [];
  loading = true;
  error = '';

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe({
      next: (data) => {
        this.players = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Fout bij ophalen spelers';
        this.loading = false;
      }
    });
  }
}
