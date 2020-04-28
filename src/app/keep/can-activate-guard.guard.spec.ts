import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateRouteGuard } from './can-activate-guard.guard';

describe('CanActivateGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateRouteGuard]
    });
  });

  it('should ...', inject([CanActivateRouteGuard], (guard: CanActivateRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
