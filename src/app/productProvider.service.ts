import { Injectable, Output } from '@angular/core';
import { ProductDataService } from './productdata.service';
import { IProduct } from './productdetail';

@Injectable()
export class ProductProvider{
     public finalProduct = [];
     public coursousel ;
    
    constructor(private productData: ProductDataService,private productLoad: ProductDataService){}

    public StoreAllProductID(){
        this.productData.loadStore()
        .subscribe(
          data => {
            this.coursousel = data.coursousel;
           // console.log(this.coursousel);
          }
        );
    }
    public StoreAllProduct(){
        this.productLoad.loadProduct()
      .subscribe(
        data => {
            for (var i = 0; i < this.coursousel.length; i++) {
                this.finalProduct.push(data[this.coursousel[i]]);
              }
             //  console.log( this.finalProduct);
        }
        
      );
    }
}