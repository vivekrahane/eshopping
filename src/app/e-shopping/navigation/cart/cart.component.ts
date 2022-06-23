import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/shoppingcart.service';
import { IProduct } from 'src/app/productdetail';
import { ProductDataService } from 'src/app/productdata.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 products:IProduct[] = [];
 total:number = 0;
 count:number = 0;
  @Input() display:boolean=false;
  constructor(private removeProduct:ShoppingCartService,private cartCount:ShoppingCartService) { 

  }
  ngOnInit() {
    this.removeProduct.addToCartDiv.subscribe(
      (product) =>{
        for(var i = 0; i <this.products.length;i++){
          if(this.products[i].productId === product.productId){
            this.products[i].productQty++;
            this.totalPrice();
            return ;
          }
        }
       this.products.push(new IProduct(product.productName,product.imageSrc,product.price,product.productId,1));
       this.totalPrice();
      }
    )
    
  }
   closePopup(){
    this.display = !this.display;
   }
   totalPrice(){
    this.total = 0;
    for(var i=0;i<this.products.length;i++){
      var num = this.products[i].price.split('$');
      var totalPrice = parseFloat(num[1]);
      this.total += ( totalPrice * this.products[i].productQty);
    }
    this.cartCount.cartCount.next(this.products.length);
   }

   removeFromCart(pid){
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].productId === pid)
      {  
        this.products.splice(i,1);
      }           
    }
    this.totalPrice();
  }

  add(pid){
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].productId === pid)
      {  
        this.products[i].productQty += 1;
      }           
    }
    this.totalPrice();
  }

  del(pid){
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].productId === pid)
      {  
        this.products[i].productQty -= 1;
      }           
    }
    this.totalPrice();
  }
}

