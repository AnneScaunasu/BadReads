import { TestBed } from '@angular/core/testing';

import { BadreadsServiceService } from './badreads-service.service';

describe('BadreadsServiceService', () => {
  let service: BadreadsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BadreadsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
