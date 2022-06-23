import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/productdata.service';
import { ShoppingCartService } from 'src/app/shoppingcart.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {

  public pt;
  public finalProduct= [];
  public initialProduct = [];
  coursousel ;
  constructor(private productLoad: ProductDataService,
    private productStore: ProductDataService,private addProduct:ShoppingCartService) { }

  ngOnInit() {
    this.productLoad.loadProduct()
      .subscribe(
        data => {
            for(let boxview of Object.values(data)){
              this.initialProduct.push(boxview);
              }
            for(var i = 0; i < this.initialProduct.length;i++){
              if(this.initialProduct[i].category === 'Electronics'){
                this.finalProduct.push(this.initialProduct[i]);
              }
            }
          }
      );
  }
  addToCart(productId){
    this.addProduct.addToCartDiv.next(productId);
  }

}
