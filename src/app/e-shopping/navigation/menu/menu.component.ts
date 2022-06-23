import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShoppingCartService } from 'src/app/shoppingcart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  totalCartNumber = 0;
 @Output() displayEvent = new EventEmitter<void>();
  constructor(private cart:ShoppingCartService) { }

  ngOnInit() {
    this.cart.cartCount.subscribe(
      (data) =>{
          this.totalCartNumber = data;
      }
    )
  }
  displayCart():void{
    this.displayEvent.emit();
  }

}
