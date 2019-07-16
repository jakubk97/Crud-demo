import { TestBed } from '@angular/core/testing';

import { ShopcardService } from './shopcard.service';

describe('ShopcardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopcardService = TestBed.get(ShopcardService);
    expect(service).toBeTruthy();
  });
});
