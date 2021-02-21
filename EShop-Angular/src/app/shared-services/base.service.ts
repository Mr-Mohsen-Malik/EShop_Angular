import { Injectable,OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  // private provider: firebase.auth.GoogleAuthProvider;
  user?: firebase.User;
  isLoggedIn:boolean = false;
  constructor(private store: AngularFirestore, private auth: AngularFireAuth) {
    // this.provider = new firebase.auth.GoogleAuthProvider();
    auth.authState.subscribe( user => {
      if (!user) {
        this.isLoggedIn = false;
        this.user = undefined; 
        return;
      }
      this.isLoggedIn = true;
      this.user = user; 
    });

   }

  getProducts(){
    return this.store.collection<any>('products').snapshotChanges();
  }

  login() {
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

  logout() {
    this.auth.signOut();
  }
}

