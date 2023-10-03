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
}
