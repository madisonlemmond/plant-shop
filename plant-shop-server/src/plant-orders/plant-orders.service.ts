import { BadRequestException, Injectable } from '@nestjs/common';
import { PlantsService } from 'src/plants/plants.service';
import { PlantOrder } from './plant-orders.interface';
import { PlantOrderRequest } from './plant-order-requests/plant-order-requests.interface';
import { Plant } from '../plants/plants.interface';
import * as fs from 'fs';

@Injectable()
export class PlantOrdersService {
    private requestedPlant: Plant;

    private plantOrders: Array<PlantOrder>;

    constructor(private readonly plantsService: PlantsService) {
        this.plantOrders = JSON.parse(fs.readFileSync('plant-orders.json', 'utf8'));
    }

    public getAll(): Array<PlantOrder> | void {
        return this.plantOrders;
    }

    public getOrderDetails(orderNumber: number) {
        return this.plantOrders.find(order => order.orderNumber === orderNumber);
    }

    public createOrder(plantOrderRequest: PlantOrderRequest): PlantOrder {
        this.requestedPlant = this.plantsService.getPlantById(plantOrderRequest.plantId);

        if (this.requestedPlant?.qtyAvailable >= plantOrderRequest.qtyPurchased) {
            this.requestedPlant.qtyAvailable -= plantOrderRequest.qtyPurchased;

            this.plantsService.updatePlantQty(this.requestedPlant);           

            const plantName: string = this.requestedPlant.name;
            const orderNumber: number = this.plantOrders.length + 1;
            const salePrice: number = this.requestedPlant.price * plantOrderRequest.qtyPurchased;
            
            const newOrderDetails: PlantOrder = {
                ...plantOrderRequest,
                plantName,
                orderNumber,
                salePrice
            };

            this.plantOrders = [
                ...this.plantOrders,
                newOrderDetails
            ];

            fs.writeFileSync('plant-orders.json', JSON.stringify(this.plantOrders));

            return newOrderDetails;
        } else {
            throw new BadRequestException();
        }
    }
}
