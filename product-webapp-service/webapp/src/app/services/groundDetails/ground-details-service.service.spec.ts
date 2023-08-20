import { TestBed } from '@angular/core/testing';

import { GroundDetailsServiceService } from './ground-details-service.service';

describe('GroundDetailsServiceService', () => {
  let service: GroundDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroundDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
