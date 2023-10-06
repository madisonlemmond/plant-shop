import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Plant } from './plant';
import { PlantsService } from './plants.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent {
  plants$: Observable<Plant[]> = new Observable<Plant[]>();
  fetchData$: BehaviorSubject<void>;
  

  constructor(private readonly plantsService: PlantsService) {}

  ngOnInit() {
    this.onFetchData();
  }

  public onFetchData(): void {
    this.plants$ = this.plantsService.getAllPlants();  
  }
}
