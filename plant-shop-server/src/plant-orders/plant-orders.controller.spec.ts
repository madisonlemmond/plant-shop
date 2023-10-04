import { Test, TestingModule } from '@nestjs/testing';
import { PlantOrdersController } from './plant-orders.controller';

describe('PlantOrdersController', () => {
  let controller: PlantOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlantOrdersController],
    }).compile();

    controller = module.get<PlantOrdersController>(PlantOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
