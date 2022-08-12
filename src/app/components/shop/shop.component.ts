import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/DataModels/product.interface';
import { ProductApiConService } from 'src/app/services/product-api-con.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  sortType: string;
  category:string;
  products:Product[];

  constructor(private apiService:ProductApiConService) { }

  ngOnInit(): void {
    this.apiService.getAllProducts().subscribe(prod => {this.products = prod;});
  }

  goElectronics() {
    this.category = 'electronics';
    this.sortTypeSelected();
  }
  goJewelery() {
    this.category = 'jewelery';
    this.sortTypeSelected();
  }
  goMen() {
    this.category = "men's clothing";
    this.sortTypeSelected();
  }
  goWomen() {
    this.category = "women's clothing";
    this.sortTypeSelected();
  }
  sortTypeSelected(){
    if(this.category && this.sortType)
    {
      this.apiService.getSortedProducts(this.sortType, this.category).subscribe(prod => {this.products = prod;});
    }else if(this.sortType){
      this.apiService.getSortedProducts(this.sortType, null).subscribe(prod => {this.products = prod;});
    }else{
      this.apiService.getSpecificProducts(this.category).subscribe(prod => {this.products = prod;});
    }
    
  }

}

