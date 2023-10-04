import { Module } from '@nestjs/common';
import { PlantOrdersService } from './plant-orders.service';
import { PlantOrdersController } from './plant-orders.controller';
import { PlantsService } from 'src/plants/plants.service';

@Module({
  providers: [PlantOrdersService, PlantsService],
  controllers: [PlantOrdersController],
  exports: [PlantOrdersService]
})
export class PlantOrdersModule {}
