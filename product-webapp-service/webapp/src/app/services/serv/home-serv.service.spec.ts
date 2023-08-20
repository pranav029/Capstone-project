import { TestBed } from '@angular/core/testing';

import { HomeServService } from './home-serv.service';

describe('HomeServService', () => {
  let service: HomeServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
