import { Module } from '@nestjs/common';
import { PlantsService } from './plants.service';
import { PlantsController } from './plants.controller';

@Module({
  providers: [PlantsService],
  controllers: [PlantsController],
  exports: [PlantsService]
})
export class PlantsModule {}
