import { Module } from '@nestjs/common';
import { PlantsModule } from './plants/plants.module';
import { PlantOrdersModule } from './plant-orders/plant-orders.module';

@Module({
  imports: [PlantsModule, PlantOrdersModule],
})
export class AppModule {}
