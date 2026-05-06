import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { Edit } from './edit';
import { PlayerService } from '../../Services/player-service';
import { PositionService } from '../../../Position/Services/position-service';

describe('Edit', () => {
  let component: Edit;
  let fixture: ComponentFixture<Edit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Edit],
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
            updatePlayer: () => of(void 0),
          },
        },
        {
          provide: PositionService,
          useValue: {
            getPositions: () => of([]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Edit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
