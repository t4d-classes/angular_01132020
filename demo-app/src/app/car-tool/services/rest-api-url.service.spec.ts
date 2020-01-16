import { TestBed } from '@angular/core/testing';

import { RestApiUrlService } from './rest-api-url.service';

describe('RestApiUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestApiUrlService = TestBed.get(RestApiUrlService);
    expect(service).toBeTruthy();
  });
});
