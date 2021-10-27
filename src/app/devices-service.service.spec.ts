import { TestBed } from '@angular/core/testing';

import { DevicesServiceService } from './devices-service.service';

describe('DevicesServiceService', () => {
  let service: DevicesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevicesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
