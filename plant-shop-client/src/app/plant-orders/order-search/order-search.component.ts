import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { PlantOrdersService } from '../plant-orders.service';
import { OrderDetails } from './order-details/order-details';


@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.scss']
})
export class OrderSearchComponent {

  orderDetails$: Observable<OrderDetails> = new Observable<OrderDetails>();

  constructor(private readonly plantOrdersService: PlantOrdersService) {}

  orderNumber = new FormControl('');

  onClick() {
    if (!!this.orderNumber.value) {
      this.orderDetails$ = this.plantOrdersService.getOrderDetails(this.orderNumber.value);
      return;
    }
    this.orderDetails$ = of();
  }
}
