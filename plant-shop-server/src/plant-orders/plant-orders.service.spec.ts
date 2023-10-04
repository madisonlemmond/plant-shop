import { Test, TestingModule } from '@nestjs/testing';
import { PlantOrdersService } from './plant-orders.service';

describe('PlantOrdersService', () => {
  let service: PlantOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantOrdersService],
    }).compile();

    service = module.get<PlantOrdersService>(PlantOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
