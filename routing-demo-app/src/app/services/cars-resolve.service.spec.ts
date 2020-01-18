import { TestBed } from '@angular/core/testing';

import { CarsResolveService } from './cars-resolve.service';

describe('CarsResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarsResolveService = TestBed.get(CarsResolveService);
    expect(service).toBeTruthy();
  });
});
