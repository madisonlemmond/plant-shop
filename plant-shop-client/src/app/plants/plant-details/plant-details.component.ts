import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderDialogComponent } from 'src/app/plant-orders/order-dialog/order-dialog.component';
import { Plant } from '../plant';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.scss']
})
export class PlantDetailsComponent {

  constructor(public dialog: MatDialog) {}

  @Input() plantDetails: Plant;

  @Output() fetchData: EventEmitter<void> = new EventEmitter<void>();

  onClickOrder() {
    const dialogRef = this.dialog.open(OrderDialogComponent, {
       data: {plant: this.plantDetails.name, plantId: this.plantDetails.id, price: this.plantDetails.price},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fetchData.emit();
    });
  }
}
