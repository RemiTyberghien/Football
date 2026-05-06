import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { Details } from './details';
import { PlayerService } from '../../Services/player-service';

describe('Details', () => {
  let component: Details;
  let fixture: ComponentFixture<Details>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Details],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1',
              },
            },
          },
        },
        {
          provide: PlayerService,
          useValue: {
            getPlayer: () =>
              of({
                id: 1,
                shirtNo: 10,
                name: 'Test Player',
                positionId: 1,
                appearances: 1,
                goals: 1,
                positionX: 0,
                positionY: 0,
                goalsPerMatch: 1,
              }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Details);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
