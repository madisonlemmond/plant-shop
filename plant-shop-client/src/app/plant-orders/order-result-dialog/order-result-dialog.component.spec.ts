import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderResultDialogComponent } from './order-result-dialog.component';

describe('OrderResultDialogComponent', () => {
  let component: OrderResultDialogComponent;
  let fixture: ComponentFixture<OrderResultDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderResultDialogComponent]
    });
    fixture = TestBed.createComponent(OrderResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
