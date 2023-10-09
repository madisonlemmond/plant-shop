import { Module } from '@nestjs/common';
import { PlantsModule } from './plants/plants.module';
import { PlantOrdersModule } from './plant-orders/plant-orders.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    PlantsModule, 
    PlantOrdersModule
  ],
})
export class AppModule {}
