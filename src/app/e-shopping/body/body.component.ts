import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/productdata.service';
import { IProduct } from 'src/app/productdetail';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public pt;
  public finalProduct: IProduct[] = [];

  coursousel ;
  constructor(private productLoad: ProductDataService,
    private productStore: ProductDataService) { }

  ngOnInit() {
    this.productStore.loadStore()
      .subscribe(
        data => {
          this.coursousel = data.coursousel;
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
}
