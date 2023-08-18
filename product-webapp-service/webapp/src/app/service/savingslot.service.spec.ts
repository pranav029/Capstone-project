import { TestBed } from '@angular/core/testing';

import { SavingslotService } from './savingslot.service';

describe('SavingslotService', () => {
  let service: SavingslotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavingslotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
