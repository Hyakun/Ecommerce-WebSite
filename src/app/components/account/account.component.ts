import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  openOrders(){
    this.route.navigateByUrl('account/orders');
  }
  openAddresses(){
    this.route.navigateByUrl('account/addresses');
  }
  singOut(){
    env.logged=false;
    env.clientId=0;
    this.route.navigateByUrl('');
  }

}
