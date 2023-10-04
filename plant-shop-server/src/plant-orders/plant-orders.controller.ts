import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { PlantOrdersService } from './plant-orders.service';
import { PlantOrder } from './plant-orders.interface';
import { PlantOrderRequest } from './plant-order-requests/plant-order-requests.interface';

@Controller('plant-orders')
export class PlantOrdersController {
    constructor(private readonly plantOrdersService: PlantOrdersService) {}

    @Get()
    public getAll(): Array<PlantOrder> | void {
        return this.plantOrdersService.getAll();
    }

    @Get(':orderNumber')
    public getOrderDetails(@Param('orderNumber') orderNumber: number): PlantOrder {
        return this.plantOrdersService.getOrderDetails(orderNumber);
    }

    @Post('/create')
    public createOrder(@Body() plantOrderRequest: PlantOrderRequest): PlantOrder {
        return this.plantOrdersService.createOrder(plantOrderRequest);
    }
}
