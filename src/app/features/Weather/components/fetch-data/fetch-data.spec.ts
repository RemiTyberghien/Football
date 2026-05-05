import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchData } from './fetch-data';

describe('FetchData', () => {
  let component: FetchData;
  let fixture: ComponentFixture<FetchData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
