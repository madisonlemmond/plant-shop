import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSearchComponent } from './order-search.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [OrderSearchComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class OrderSearchModule { }
