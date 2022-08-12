import { Component, OnInit } from '@angular/core';
import { faHeadset, faCartShopping, faPerson, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProductForCart } from 'src/app/DataModels/productForCart.interface';
import { environment as env } from 'src/environments/environment';
import { ProductApiConService } from 'src/app/services/product-api-con.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  products: Array<ProductForCart>;

  constructor(private router: Router, private cartService: CartServiceService, private apiServ:ProductApiConService) { }
  faHeadset = faHeadset;
  faCartShopping = faCartShopping;
  faPerson = faPerson;
  faMagnifyingGlass = faMagnifyingGlass;
  faX = faX;


  searchInput:string;
  searching:boolean = false;

  productsForSearch:Array<any>;
  productsSearch:Array<any>;

  itemsInCart: boolean = false;
  searchON: boolean = false;
  cartON: boolean = false;
  ngOnInit(): void {
    this.apiServ.getAllProducts().subscribe(p => this.productsForSearch = p.map(p => ({title:p.title, id:p.id})) );
    this.cartService.addProductEvent.subscribe(prod => { this.products = prod; prod.length > 0 ? this.itemsInCart = true : this.itemsInCart = false; });
  }

  search(searchValue:string){
    if(!searchValue){
      this.searching = false;
      this.productsSearch = [];
    }else{ this.searching = true;}
    this.productsSearch = this.productsForSearch.filter(a => a.title.includes(searchValue));
  }
  navigate(id:number){
    this.router.navigateByUrl(`shop/${id}`);
    this.searchON=false;
    this.searching=false;
    this.productsSearch = [];
  }

  toggleSearch(): void {
    this.searchON = !this.searchON;
    if (this.searchON == true) {
      this.cartON = false;
    }
  }
  toggleCart(): void {
    this.cartON = !this.cartON;
    if (this.cartON == true) {
      this.searchON = false;
    }
  }
  navigateShop() {
    this.cartON = false;
    this.searchON = false;
    this.router.navigateByUrl('/shop')
  }
  navigateHome() {
    this.cartON = false;
    this.searchON = false;
    this.router.navigateByUrl('')
  }

  viewCart() {
    this.cartON = false;
    this.searchON = false;
    this.router.navigateByUrl('/cart');
  }

  openLogin() {
    if (env.logged) {
      this.router.navigateByUrl('account/orders');
    } else {
      this.router.navigateByUrl('login');
    }
  }
  checkout(){
    this.cartON = false;
    this.searchON = false;
    this.router.navigateByUrl('checkout');
  }

}
