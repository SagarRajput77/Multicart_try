import { TestBed } from '@angular/core/testing';

import { NewSService } from './new-s.service';

describe('NewSService', () => {
  let service: NewSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
