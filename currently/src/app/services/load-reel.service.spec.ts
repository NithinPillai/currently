import { TestBed } from '@angular/core/testing';

import { LoadReelService } from './load-reel.service';

describe('LoadReelService', () => {
  let service: LoadReelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadReelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
