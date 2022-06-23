import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProductProvider } from './productProvider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  constructor(private router:Router,private productLoad:ProductProvider){}

  ngOnInit(){
    this.router.navigate(['']);
    this.productLoad.StoreAllProductID();
    this.productLoad.StoreAllProduct();
  }

}
