import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Plant } from './plants.interface';

@Injectable()
export class PlantsService {
    private plantsArray: Array<Plant> = [
        { "id": 1, "name": "Snake Plant", "scientificName": "Dracaena trifasciata", "price": 12, "qtyAvailable": 12, "funFact": "Snake plants are on the top of the list of air purifying plants. They release oxygen at night though a process called Crassulacean Acid Metabolism (cam). To avoid dehydration, they only open their stomata at night.  They capture co2 and release o2, during the day they use the stored organic acids for use in photosynthesis."}, 
        { "id": 2, "name": "Pothos", "scientificName": "Epipremnum aureum", "price": 8, "qtyAvailable": 3, "funFact": "Some people refer to the pothos as the hunter's plant, arum Ivy or taro vine. Its most widely-used nickname is 'The Devil's Ivy' because it is almost too difficult to kill." }, 
        { "id": 3, "name": "Spider plant", "scientificName": "Chlorophytum comosum", "price": 10, "qtyAvailable": 9, "funFact": "Because there are so many spider plant benefits, such as lowering stress, depression, and anxiety, spider plants are considered quite therapeutic. This advantage is related to the plant’s capacity to purge pollutants and absorb carbon dioxide and toxins like formaldehyde and xylene, promoting a healthy living environment." }, 
        { "id": 4, "name": "Monstera", "scientificName": "Monstera deliciosa", "price": 50, "qtyAvailable": 5, "funFact": "Tropical rainforests are the natural habitat of the Monstera. By developing holes in its leaves, the large Monstera leaves are better suited to withstand heavy rainfall and wind as they let the elements pass through the holes. These abnormal leaves (monstera means strange in Latin) gave the plant its name." }, 
        { "id": 5, "name": "Fiddleleaf fig", "scientificName": "Ficus lyrata", "price": 35, "qtyAvailable": 7, "funFact": "The large leaves of fiddle leaf figs produce and emit an abundance of oxygen during the process of photosynthesis. This process stops during the night when there’s no sunlight to catalyse the process, and the plant starts emitting carbon dioxide. However, as the fiddle leaf fig produces so much oxygen during the day, they actually increase the oxygen content of your home. As a result, they can help improve your sleep. This is because an abundance of oxygen encourages the brain to relax and stay in a deep sleep." }, 
        { "id": 6, "name": "African violet", "scientificName": "Saintpaulia ionantha", "price": 12, "qtyAvailable": 7, "funFact": "While most indoor plants flourish only two to five years, the African violet flower has serious staying power. With the right care, they can live up to 50 years! The key is to avoid over-watering, chilly temperatures, and direct sunlight—all of which can drastically reduce your plant’s chance of reaching a ripe old age." }
    ];

    private plants: Array<Plant>;

    constructor() {
        fs.writeFileSync('plants.json', JSON.stringify(this.plantsArray));
        this.plants = JSON.parse(fs.readFileSync('plants.json', 'utf8'));
    }

    public getAll(): Array<Plant> {
        this.plants = JSON.parse(fs.readFileSync('plants.json', 'utf8'));
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
