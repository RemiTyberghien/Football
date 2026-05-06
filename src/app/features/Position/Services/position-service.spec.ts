import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { PositionService } from './position-service';

describe('PositionService', () => {
  let service: PositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(PositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
