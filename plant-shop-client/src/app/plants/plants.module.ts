import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsComponent } from './plants.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    PlantsComponent,
    PlantDetailsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class PlantsModule { }
