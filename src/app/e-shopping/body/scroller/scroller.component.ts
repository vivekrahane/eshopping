import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/productdetail';
import { ProductDataService } from 'src/app/productdata.service';
import { ShoppingCartService } from 'src/app/shoppingcart.service';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.css']
})
export class ScrollerComponent implements OnInit {

  public pt;
  public finalProduct: IProduct[] = [];

  coursousel ;
  constructor(private productLoad: ProductDataService,
    private productStore: ProductDataService,private addProduct:ShoppingCartService) { }

  ngOnInit() {
    this.productStore.loadStore()
      .subscribe(
        data => {
          this.coursousel = data.scollerComponent;
        }
      );
    this.productLoad.loadProduct()
      .subscribe(
        data => {
          for (var i = 0; i < this.coursousel.length; i++) {
            this.finalProduct.push(data[this.coursousel[i]]);
          }
        }
        
      );
  }

 addToCart(productId){
  this.addProduct.addToCartDiv.next(productId);
 }
  
}
