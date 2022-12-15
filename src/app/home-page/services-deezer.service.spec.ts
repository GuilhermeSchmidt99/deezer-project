import { TestBed } from '@angular/core/testing';

import { ServicesDeezerService } from './services-deezer.service';

describe('ServicesDeezerService', () => {
  let service: ServicesDeezerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesDeezerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
