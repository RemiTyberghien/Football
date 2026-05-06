import { Component } from '@angular/core';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Player } from '../../Models/player.model';
import { PlayerService } from '../../Services/player-service';

@Component({
  selector: 'app-details',
  imports: [AsyncPipe, DecimalPipe, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  player$: Observable<Player>;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.player$ = this.playerService.getPlayer(id);
  }
}
