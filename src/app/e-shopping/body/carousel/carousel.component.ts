import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/productdetail';
import { ProductProvider } from 'src/app/productProvider.service';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  
})
export class CarouselComponent implements OnInit {
  public finalProduct = [];
  constructor(private productLoad:ProductProvider) { }

  ngOnInit() {
    this.finalProduct = this.productLoad.finalProduct;
  }
 
}
