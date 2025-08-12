import { TestBed } from '@angular/core/testing';

import { GetEmployesService } from './get-employes.service';

describe('GetEmployesService', () => {
  let service: GetEmployesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEmployesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
