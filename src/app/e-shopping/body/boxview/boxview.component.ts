import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/productdetail';
import { ProductDataService } from 'src/app/productdata.service';
import { ShoppingCartService } from 'src/app/shoppingcart.service';

@Component({
  selector: 'app-boxview',
  templateUrl: './boxview.component.html',
  styleUrls: ['./boxview.component.css']
})
export class BoxviewComponent implements OnInit {

  public pt;
  public finalProduct: IProduct[] = [];
  public coursousel ;
  constructor(private productLoad: ProductDataService,private productStore: ProductDataService,private addProduct:ShoppingCartService) { }

  ngOnInit() {
    this.productStore.loadStore()
      .subscribe(
        data => {
          this.coursousel = data.mainContener;
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
