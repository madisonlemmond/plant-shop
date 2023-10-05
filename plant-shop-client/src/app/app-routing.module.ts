import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantsComponent } from './plants/plants.component';
import { PlantOrdersComponent } from './plant-orders/plant-orders.component';

const routes: Routes = [
  {
    path: '',
    component: PlantsComponent
  },
  {
    path: 'plants',
    component: PlantsComponent
  },
  {
    path: 'order-search',
    component: PlantOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
