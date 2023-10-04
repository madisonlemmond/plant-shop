import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantsComponent } from './plants/plants.component';
import { OrderSearchComponent } from './order-search/order-search.component';

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
    component: OrderSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
