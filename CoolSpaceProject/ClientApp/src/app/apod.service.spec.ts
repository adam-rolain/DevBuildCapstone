import { TestBed } from '@angular/core/testing';

import { APODService } from './apod.service';

describe('APODService', () => {
  let service: APODService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APODService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
