import { TestBed } from '@angular/core/testing';

import { SwapiserviceService } from './swapiservice.service';

describe('SwapiserviceService', () => {
  let service: SwapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
