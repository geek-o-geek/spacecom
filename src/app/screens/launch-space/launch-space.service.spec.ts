import { TestBed } from '@angular/core/testing';

import { LaunchSpaceService } from './launch-space.service';

describe('LaunchSpaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaunchSpaceService = TestBed.get(LaunchSpaceService);
    expect(service).toBeTruthy();
  });
});
