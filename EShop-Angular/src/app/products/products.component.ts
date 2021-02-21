import { Component, OnInit } from '@angular/core';
import { BaseService } from '../shared-services/base.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products:Array<object> = [];
  constructor(public bs:BaseService) { }

  ngOnInit(): void {
    this.bs.getProducts().subscribe(data => {
      console.log("******DATA******")
      this.Products = data.map(d => {
        return {
          id: d.payload.doc.id,
          ...d.payload.doc.data() as {}
        }
      });
      console.log(this.Products)
    })
  }

}
