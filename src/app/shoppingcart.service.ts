import { ProductDataService } from './productdata.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingCartService{
   public addToCartDiv = new Subject<any>();
   public cartCount = new Subject<number>();
}