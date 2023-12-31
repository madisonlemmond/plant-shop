import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { PlantOrdersService } from '../plant-orders.service';
import { OrderDetails } from './order-details/order-details';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.scss']
})
export class OrderSearchComponent {

  orderDetails$: Observable<OrderDetails | null> = new Observable<OrderDetails | null>();
  error: Error;

  constructor(private readonly plantOrdersService: PlantOrdersService,
    private snackBar: MatSnackBar) {}

  orderNumber = new FormControl('', Validators.required);

  onClick() {
    if (!!this.orderNumber.value) {
      this.plantOrdersService.getOrderDetails(this.orderNumber.value).subscribe({
        next: (orderDetails) => this.orderDetails$ = of(orderDetails),
        error: (e) => {
          this.orderDetails$ = of(null);
          this.snackBar.open(`Error: Order ${this.orderNumber.value} Not Found`, 'OK', {
            horizontalPosition: 'center',
            verticalPosition: 'top'
          })
        }
      });
    }
  }
}
