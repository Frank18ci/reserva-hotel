import { TestBed } from '@angular/core/testing';

import { ApipaisesService } from './apipaises.service';

describe('ApipaisesService', () => {
  let service: ApipaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipaisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
