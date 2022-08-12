import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductForCart } from 'src/app/DataModels/productForCart.interface';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productss: Array<ProductForCart>;
  shipping:number = 5;
  subtotal:number = 0;


  constructor(private cartService:CartServiceService,private router:Router) { }

  ngOnInit(): void {
    this.cartService.addProductEvent.subscribe(prod=> this.productss = prod);
    this.cartService.getItems();
    this.calculateSubTotal()
  }
  changeQuantity(product:ProductForCart, quantity:string){
    for(let i = 0; i < this.productss.length; i++){
      if(this.productss[i].prod.id==product.prod.id){
        this.productss[i].quantity = Number(quantity);
      }
    }
    if(Number(quantity)<1){
      this.cartService.deleteItems(product);
    }
    this.calculateSubTotal();
  }
  calculateSubTotal(){
    this.subtotal = 0;
    for(let item of this.productss){
      this.subtotal += (item.quantity*item.prod.price);
    }
  }

  checkout(){
    this.router.navigateByUrl('checkout');
  }

}
