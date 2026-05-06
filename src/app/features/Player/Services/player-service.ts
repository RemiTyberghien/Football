import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Player, PlayerFormData } from '../Models/player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private readonly apiURL = `${environment.apiUrl}/api/Players`;

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiURL);
  }

  getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(`${this.apiURL}/${id}`);
  }

  createPlayer(player: PlayerFormData): Observable<PlayerFormData> {
    return this.http.post<PlayerFormData>(this.apiURL, player);
  }

  updatePlayer(player: Player): Observable<void> {
    return this.http.put<void>(`${this.apiURL}/${player.id}`, player);
  }

  deletePlayer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
  
 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


}
