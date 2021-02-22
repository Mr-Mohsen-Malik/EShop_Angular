import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared-services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products:Array<object> = [];
  constructor(public authSrvc:AuthService) { }

  ngOnInit(): void {
    this.authSrvc.getProducts().subscribe(data => {
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
