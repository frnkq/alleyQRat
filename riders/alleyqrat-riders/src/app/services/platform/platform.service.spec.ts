import { TestBed } from '@angular/core/testing';

import { PlatformService } from './platform.service';

describe('PlatformService', () => {
  let service: PlatformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to tell wether this is web or smartphone', () => {
    expect(service.isWeb).toBe(true);
    expect(service.isSmartphone).toBe(false);
  });
});
