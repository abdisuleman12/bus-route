import { TestBed } from '@angular/core/testing';

import { MetroapiService } from './metroapi.service';

describe('MetroapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetroapiService = TestBed.get(MetroapiService);
    expect(service).toBeTruthy();
  });
});
