import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantOrdersComponent } from './plant-orders.component';

describe('PlantOrdersComponent', () => {
  let component: PlantOrdersComponent;
  let fixture: ComponentFixture<PlantOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantOrdersComponent]
    });
    fixture = TestBed.createComponent(PlantOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
