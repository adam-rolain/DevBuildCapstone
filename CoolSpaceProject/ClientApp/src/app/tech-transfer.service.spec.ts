import { TestBed } from '@angular/core/testing';

import { TechTransferService } from './tech-transfer.service';

describe('TechTransferService', () => {
  let service: TechTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
