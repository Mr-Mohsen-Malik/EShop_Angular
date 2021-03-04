import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/shared-services/product.service';
import * as rsrcKys from 'src/assets/resource-keys.json'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories;
  vldtnRsrcKys:any=(rsrcKys  as  any).default.validations;
  lblRsrcKys:any=(rsrcKys  as  any).default.labels;
  constructor(private productSrvc: ProductService) {
    console.log(this.vldtnRsrcKys)
    productSrvc.getCategories().subscribe(actionArray => {
      this.categories = 
      actionArray.map(item => {
        return {
         id: item.payload.doc.id,
        category : item.payload.doc.data()
        }
      });
   });
  }
  ngOnInit(): void {
  }

  save(form: NgForm){
   this.productSrvc.saveProduct(form);
  }

}
