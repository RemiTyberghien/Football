import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { FetchData } from './fetch-data';
import { WeatherService } from '../../Services/weather-service';

describe('FetchData', () => {
  let component: FetchData;
  let fixture: ComponentFixture<FetchData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchData],
      providers: [
        {
          provide: WeatherService,
          useValue: {
            getWeather: () => of([]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FetchData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
