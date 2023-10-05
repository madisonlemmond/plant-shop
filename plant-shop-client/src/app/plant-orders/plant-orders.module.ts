import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantOrdersComponent } from './plant-orders.component';
import { OrderSearchComponent } from './order-search/order-search.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderDetailsComponent } from './order-search/order-details/order-details.component';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [PlantOrdersComponent, OrderSearchComponent, OrderDetailsComponent, OrderDialogComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class PlantOrdersModule { }
