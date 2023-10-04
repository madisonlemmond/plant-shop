import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PlantsService } from './plants.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent {
  plants$: Observable<any[]> = new Observable<any[]>();


  constructor(private readonly plantsService: PlantsService) {}

  ngOnInit() {
    this.plants$ = this.plantsService.getAllPlants();
  }
}
