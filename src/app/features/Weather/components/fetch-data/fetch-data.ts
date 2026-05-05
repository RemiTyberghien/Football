import { Component } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Weather } from '../../Models/weather.model';
import { WeatherService } from '../../Services/weather-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fetch-data',
  imports: [AsyncPipe, NgFor, NgIf],
  templateUrl: './fetch-data.html',
  styleUrl: './fetch-data.css',
})
export class FetchData {
  forecasts$: Observable<Weather[]>;

  constructor(private weatherService: WeatherService) {
    this.forecasts$ = this.weatherService.getWeather();
  }
}
