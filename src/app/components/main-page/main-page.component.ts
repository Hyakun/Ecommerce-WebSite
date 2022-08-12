import { Component, OnInit } from '@angular/core';
import { ProductApiConService } from 'src/app/services/product-api-con.service';
import { Product } from 'src/app/DataModels/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  products:Array<Product>=[];
  dataRecived:boolean = false;

  constructor( private apiService:ProductApiConService, private route:Router) { }

  ngOnInit(): void {
    this.apiService.getMainPageData().subscribe((products) => {this.products = products; this.dataRecived = true})
  }


  nav(id:number){
    this.route.navigateByUrl(`shop/${id}`);
  }

}
