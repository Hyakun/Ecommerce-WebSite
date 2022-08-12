import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { ShopComponent } from './components/shop/shop.component';
import { ConnectedGuard } from './guards/connected.guard';

const routes: Routes = [
  {
    path: '', component: MainPageComponent
  },
  {
    path: 'shop', component: ShopComponent
  },
  {
    path: 'shop/:id', component:ProductComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'login', component:LoginpageComponent
  },
  {
    path:'create', component:RegisterpageComponent
  },
  {
    path:'account', component:AccountComponent,
    canActivate:[ConnectedGuard],
    children:[
    {
      path:'orders', component:OrdersComponent
    },
    {
      path:'addresses', component:AddressesComponent
    }

    ]
  },
  {
    path:'checkout', component:CheckoutComponent
  },
  {
    path: '**', component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
