import { TestBed } from '@angular/core/testing';

import { CoolSpaceService } from './cool-space.service';

describe('CoolSpaceService', () => {
  let service: CoolSpaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoolSpaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
