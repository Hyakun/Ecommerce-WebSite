import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';
import { DialogModule } from '@angular/cdk/dialog';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { AccountComponent } from './components/account/account.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    ShopComponent,
    ProductsComponent,
    ProductComponent,
    ProductCardComponent,
    CartComponent,
    LoginpageComponent,
    RegisterpageComponent,
    AccountComponent,
    OrdersComponent,
    AddressesComponent,
    AddAddressComponent,
    CheckoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    StarRatingModule.forRoot(),
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
