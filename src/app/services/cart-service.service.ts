import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../DataModels/product.interface';
import { ProductForCart } from '../DataModels/productForCart.interface';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  products: ProductForCart[] = new Array<ProductForCart>;
  constructor() { }
  addProductEvent = new EventEmitter<Array<ProductForCart>>();

  addItems(product:Product):void{
    for(let i = 0; i<this.products.length; i++){
      if(this.products[i].prod.id== product.id){
        this.products[i].quantity++;
        this.getItems();
        return;
      }
    }
    this.products.push({prod:product, quantity:1});
    this.getItems();
  }
  deleteItems(product:ProductForCart){
    this.products = this.products.filter(prod => prod.prod.id != product.prod.id);
    this.getItems();
  }
  clearCart(){
    this.products = [];
    this.getItems();
  }
  
  getItems(){
    this.addProductEvent.emit(this.products);
  }

}

