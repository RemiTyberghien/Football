import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { Create } from './create';
import { PlayerService } from '../../Services/player-service';
import { PositionService } from '../../../Position/Services/position-service';

describe('Create', () => {
  let component: Create;
  let fixture: ComponentFixture<Create>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Create],
      providers: [
        provideRouter([]),
        {
          provide: PlayerService,
          useValue: {
            createPlayer: () => of({}),
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

    fixture = TestBed.createComponent(Create);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
