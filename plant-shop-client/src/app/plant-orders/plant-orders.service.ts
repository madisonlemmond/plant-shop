import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OrderDetails } from './order-search/order-details/order-details';
import { PlantOrderRequest } from './plant-order-request';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root'
})
export class PlantOrdersService {

  constructor(private http: HttpClient) { }

  getOrderDetails(orderNumber: string): Observable<OrderDetails> {
    const params = new HttpParams().set('orderNumber', parseInt(orderNumber));
    return this.http.get<OrderDetails>(environment.api + '/plant-orders/query', {params: params});
  }

  createOrder(orderRequest: PlantOrderRequest): Observable<OrderDetails> {
    return this.http.post<OrderDetails>(environment.api + '/plant-orders/create', orderRequest);
  }
}
