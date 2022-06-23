import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EShoppingComponent } from './e-shopping/e-shopping.component';
import { NavigationComponent } from './e-shopping/navigation/navigation.component';
import { BodyComponent } from './e-shopping/body/body.component';
import { FooterComponent } from './e-shopping/footer/footer.component';
import { MenuComponent } from './e-shopping/navigation/menu/menu.component';
import { CartComponent } from './e-shopping/navigation/cart/cart.component';
import { CarouselComponent } from './e-shopping/body/carousel/carousel.component';
import { BoxviewComponent } from './e-shopping/body/boxview/boxview.component';
import { ScrollerComponent } from './e-shopping/body/scroller/scroller.component';
import { ProductDataService } from './productdata.service';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ShoppingCartService } from './shoppingcart.service';
import { Routes, RouterModule } from '@angular/router';
import { MenComponent } from './e-shopping/men/men.component';
import { WomenComponent } from './e-shopping/women/women.component';
import { KidsComponent } from './e-shopping/kids/kids.component';
import { ElectronicsComponent } from './e-shopping/electronics/electronics.component';
import { ProductProvider } from './productProvider.service';
const appRoutes:Routes=[
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path: 'Home', component : BodyComponent},
  {path:'Mens',component:MenComponent},
  {path:'Womens',component:WomenComponent},
  {path:'Kids',component:KidsComponent},
  {path:'Electronics',component:ElectronicsComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    EShoppingComponent,
    NavigationComponent,
    BodyComponent,
    FooterComponent,
    MenuComponent,
    CartComponent,
    CarouselComponent,
    BoxviewComponent,
    ScrollerComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    ElectronicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ProductDataService,ShoppingCartService,ProductProvider],
  bootstrap: [AppComponent],
  
})
export class AppModule {

 }
