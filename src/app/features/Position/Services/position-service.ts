import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Position } from '../Models/position.model';

@Injectable({
  providedIn: 'root',
})
export class PositionService {
  private readonly apiURL = `${environment.apiUrl}/api/Positions`;

  constructor(private http: HttpClient) {}

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(this.apiURL);
  }
}
