import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderDetails } from '../order-search/order-details/order-details';

@Component({
  selector: 'app-order-result-dialog',
  templateUrl: './order-result-dialog.component.html',
  styleUrls: ['./order-result-dialog.component.scss']
})
export class OrderResultDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {success: boolean, message: string, orderDetails?: OrderDetails}) {}
}
