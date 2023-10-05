import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlantOrderRequest } from '../plant-order-request';
import { PlantOrdersService } from '../plant-orders.service';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss']
})
export class OrderDialogComponent {
  orderQty: FormControl;
  purchaserName: FormControl;
  shippingAddress: FormControl;

  plantOrderRequest: PlantOrderRequest;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {plant: string, plantId: number, price: number},
  private readonly plantOrdersService: PlantOrdersService) {}

  ngOnInit() {
    this.orderQty = new FormControl(1, [Validators.min(1), Validators.required]);
    this.purchaserName = new FormControl('', Validators.required);
    this.shippingAddress = new FormControl('', Validators.required)
  }

  onCancel() {

  }

  onOrder() {
    const purchaserInfo = {
      qtyPurchased: this.orderQty.value,
      purchaserName: this.purchaserName.value,
      shippingAddress: this.shippingAddress.value
    };

    this.plantOrderRequest = {
      ...this.data,
      ...purchaserInfo
    }

    this.plantOrdersService.createOrder(this.plantOrderRequest).subscribe((confirmedOrderDetails) => {
      console.log(confirmedOrderDetails);
    })
  }

}
