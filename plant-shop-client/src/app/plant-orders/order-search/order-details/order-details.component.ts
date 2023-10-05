import { Component, Input } from '@angular/core';
import { OrderDetails } from './order-details';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {

  @Input() orderDetails: OrderDetails;

  ngOnInit() {
    console.log(this.orderDetails)
  }
}
