import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/DataModels/product.interface';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProductApiConService } from 'src/app/services/product-api-con.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy{
  product:Product;
  apiObs:any;
  routeObs:any;
  productID:string|null;
  itemRecived:boolean = false;

  constructor(private route:ActivatedRoute, private apiService: ProductApiConService, private cartService:CartServiceService) { }

  ngOnInit(): void {
    this.routeObs = this.route.params.subscribe(params => {this.productID = params['id']; this.getProd()});
  }

  getProd(){
    this.apiObs = this.apiService.getProduct(this.productID!).subscribe(prod => {this.product = prod; this.itemRecived=true});
  }

  ngOnDestroy(): void {
    this.apiObs.unsubscribe();
    this.routeObs.unsubscribe();
  }

  addToCart(){
    this.cartService.addItems(this.product);
  }




}
