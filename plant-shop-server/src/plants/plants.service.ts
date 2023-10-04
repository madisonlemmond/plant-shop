import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Plant } from './plants.interface';

@Injectable()
export class PlantsService {
    private plants: Array<Plant>;

    constructor() {
        this.plants = JSON.parse(fs.readFileSync('plants.json', 'utf8'));
    }

    public getAll(): Array<Plant> {
        return this.plants;
    }

    public getPlantById(id: number): Plant {
        return this.plants.find(plant => plant.id === id);
    }

    public updatePlantQty(updatedPlant: Plant): void {
        const index: number = this.plants.findIndex(plant => plant.id === updatedPlant.id);
        this.plants[index] = updatedPlant;
        fs.writeFileSync('plants.json', JSON.stringify(this.plants));
    }
}
