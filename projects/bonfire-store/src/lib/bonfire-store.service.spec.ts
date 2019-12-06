import { TestBed } from '@angular/core/testing';

import { BonfireStoreService } from './bonfire-store.service';

describe('BonfireStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BonfireStoreService = TestBed.get(BonfireStoreService);
    expect(service).toBeTruthy();
  });
});
