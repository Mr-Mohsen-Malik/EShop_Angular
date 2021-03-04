import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private store: AngularFirestore) { }

  getCategories(){
    return this.store.collection('/categories',ref => ref.orderBy('name')).snapshotChanges();
  }

  saveProduct(product){
    return this.store.collection('/products').add(product);
  }
}
