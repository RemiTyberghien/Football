import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../Models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly apiURL = `${environment.apiUrl}/api/WeatherForecast`;

  constructor(private http: HttpClient) { }

  getWeather(): Observable<Weather[]> {
    return this.http.get<Weather[]>(this.apiURL);
  }
}
