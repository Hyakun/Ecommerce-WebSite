import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/DataModels/product.interface';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product:{prod:Product, quantity:number};
  @Input() needX:boolean;
  fax = faX;
  constructor(private cartServ:CartServiceService) { }

  ngOnInit(): void {
  }
  deleteProduct(){
    this.cartServ.deleteItems(this.product);
  }

}
