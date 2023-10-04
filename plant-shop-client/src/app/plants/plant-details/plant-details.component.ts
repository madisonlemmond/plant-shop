import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.scss']
})
export class PlantDetailsComponent {

  @Input() plantDetails: any;
}
