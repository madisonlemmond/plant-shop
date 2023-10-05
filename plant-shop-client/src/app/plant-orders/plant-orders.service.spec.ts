import { TestBed } from '@angular/core/testing';

import { PlantOrdersService } from './plant-orders.service';

describe('PlantOrdersService', () => {
  let service: PlantOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
