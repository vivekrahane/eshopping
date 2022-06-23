import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { IProduct } from './productdetail';

@Injectable()
export class ProductDataService{

    private productUrl = "/assets/data/product.json";
    private storeUrl = "/assets/data/store.json";
    constructor(private http: Http, private https:Http){}
    
    loadStore(){
        return this.https.get(this.storeUrl)
        .map(
            (response: Response) => {
            const data = response.json();
            return data;
            }
          );   
    }

    loadProduct(){
        this.loadStore();
        return this.http.get(this.productUrl)
        .map(
            (response: Response) => {
            const data = response.json();
            return data;
            }
          );   
    } 
}
