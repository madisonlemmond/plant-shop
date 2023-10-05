import { Controller, Get, Post, Query, Body, NotFoundException } from '@nestjs/common';
import { PlantOrdersService } from './plant-orders.service';
import { PlantOrder } from './plant-orders.interface';
import { PlantOrderRequest } from './plant-order-requests/plant-order-requests.interface';

@Controller('plant-orders')
export class PlantOrdersController {
    constructor(private readonly plantOrdersService: PlantOrdersService) {}

    @Get()
    public getAll(): Array<PlantOrder> | null {
        return this.plantOrdersService.getAll();
    }

    @Get('/query')
    public getOrderDetails(@Query('orderNumber') orderNumber: number): PlantOrder | null {
        const order = this.plantOrdersService.getOrderDetails(orderNumber);
        if (!order) {
            throw new NotFoundException;
        }
        return order;
    }

    @Post('/create')
    public createOrder(@Body() plantOrderRequest: PlantOrderRequest): PlantOrder {
        return this.plantOrdersService.createOrder(plantOrderRequest);
    }
}
