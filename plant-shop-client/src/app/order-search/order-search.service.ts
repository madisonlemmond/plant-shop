import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderSearchService {

  constructor(private http: HttpClient) { }

  getOrderDetails(orderNumber: string): Observable<any> {
    const params = new HttpParams().set('orderNumber', parseInt(orderNumber));
    console.log(params)
    return this.http.get<any>('api/plant-orders/', {params: params});
  }
}
