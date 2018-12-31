import { TestBed } from '@angular/core/testing';

import { MobileAppService } from './mobile-app.service';

describe('MobileAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileAppService = TestBed.get(MobileAppService);
    expect(service).toBeTruthy();
  });
});
