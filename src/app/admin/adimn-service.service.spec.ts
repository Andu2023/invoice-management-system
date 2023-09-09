import { TestBed } from '@angular/core/testing';

import { AdimnServiceService } from './adimn-service.service';

describe('AdimnServiceService', () => {
  let service: AdimnServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdimnServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
