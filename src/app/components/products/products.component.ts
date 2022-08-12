
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/DataModels/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products: Product[];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  showProduct(product:Product){
    this.router.navigateByUrl(`shop/${product.id}`);
  }
}
