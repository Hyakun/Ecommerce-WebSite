import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../DataModels/accountCreated.interface';
import { Observable, map } from 'rxjs';
import { Order } from '../DataModels/order.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountsServiceService {
  url:string='http://localhost:5000';

  constructor(private http:HttpClient) { }
  
  getAccounts():Observable<Array<Account>>{
    return this.http.get<Array<Account>>(`${this.url}/accounts`);
  }
  addAccount(account:Account):Observable<Account>{
    return this.http.post<Account>(`${this.url}/accounts`, account);
  }
  getAcc(id:number):Observable<Account>{
    return this.http.get<Account>(`${this.url}/accounts/${id}`);
  }
  updateAcc(id:number, updated:Account):Observable<Account>{
    return this.http.put<Account>(`${this.url}/accounts/${id}`, updated);
  }

  addOrder(order:Order):Observable<Order>{
    return this.http.post<Order>(`${this.url}/orders`, order);
  }
  getOrders(email:string):Observable<Array<Order>>{
    return this.http.get<Array<Order>>(`${this.url}/orders`).pipe(
      map(orders => orders.filter(o => o.email ===email )));
  }
}
