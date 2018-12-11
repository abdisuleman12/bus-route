import { TestBed } from '@angular/core/testing';

import { MetroApiService } from '../service/metroapi.service';

describe('MetroapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetroApiService = TestBed.get(MetroApiService);
    expect(service).toBeTruthy();
  });
});
