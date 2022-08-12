import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/DataModels/accountCreated.interface';
import { Order } from 'src/app/DataModels/order.interface';
import { ProductForCart } from 'src/app/DataModels/productForCart.interface';
import { AccountsServiceService } from 'src/app/services/accounts-service.service';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  email:string;
  fname:string;
  lname:string;
  country:string;
  zipcode:string;
  city:string;
  singleAdress:string;
  phone:string;
  products:Array<ProductForCart>;
  shipping:number = 5;
  subtotal:number = 0;

  connected:boolean = env.logged;
  account:Account;

  orderFinished:boolean=false;
  constructor(private cartserv:CartServiceService, private accServ:AccountsServiceService) { }

  ngOnInit(): void {
    this.cartserv.addProductEvent.subscribe(prod => {this.products = prod; this.calculateSubTotal()});
    this.cartserv.getItems();
    this.calculateSubTotal();
    if(this.connected){
      this.accServ.getAcc(env.clientId).subscribe(acc => {this.account = acc; this.changeAddress("0");});
    }
  }

  calculateSubTotal(){
    this.subtotal = 0;
    for(let item of this.products){
      this.subtotal += (item.quantity*item.prod.price);
    }
  }

  order(){
    const date = new Date();
    const order:Order = {
      id:null,
      email:this.email,
      address:{fname:this.fname, lname:this.lname, country:this.country, zipcode:this.zipcode, city:this.city, address:this.singleAdress, phone:this.phone},
      products:this.products,
      totalPrice:Number((this.subtotal+this.shipping).toFixed(2)),
      date:date.getFullYear()+'.'+(date.getMonth()+1)+'.'+date.getDay()
    };

    this.accServ.addOrder(order).subscribe();
    this.orderFinished=true;
    this.cartserv.clearCart();
  }

  changeAddress(i:string){
    this.email = this.account.email;
    this.fname = this.account.adress[Number(i)].fname;
    this.lname = this.account.adress[Number(i)].lname;
    this.country = this.account.adress[Number(i)].country;
    this.zipcode = this.account.adress[Number(i)].zipcode;
    this.city = this.account.adress[Number(i)].city;
    this.singleAdress = this.account.adress[Number(i)].address;
    this.phone = this.account.adress[Number(i)].phone;
  }
  
}
