import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OrderSearchService } from './order-search.service';


@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.scss']
})
export class OrderSearchComponent {

  constructor(private readonly orderSearchService: OrderSearchService) {}

  orderNumber = new FormControl('');

  onClick() {
    if (!!this.orderNumber.value) {
      return this.orderSearchService.getOrderDetails(this.orderNumber.value);
    }
    return;
  }
}
