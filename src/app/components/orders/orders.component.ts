import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/DataModels/order.interface';
import { AccountsServiceService } from 'src/app/services/accounts-service.service';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders:Array<Order>;

  constructor(private accServ:AccountsServiceService) { }

  ngOnInit(): void {
    this.accServ.getOrders(env.email).subscribe(arr => this.orders = arr );
  }

}
