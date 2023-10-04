import { Controller, Get, Put, Param } from '@nestjs/common';
import { Plant } from './plants.interface';
import { PlantsService } from './plants.service';

@Controller('plants')
export class PlantsController {
    constructor(private readonly plantsService: PlantsService) {}

    @Get()
    public getAll(): Array<Plant> {
        return this.plantsService.getAll();
    }
}
