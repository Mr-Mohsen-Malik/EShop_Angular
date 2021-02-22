import { Injectable,OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private provider: firebase.auth.GoogleAuthProvider;
  user?: firebase.User;
  isLoggedIn:boolean = false;
  constructor(private store: AngularFirestore, private auth: AngularFireAuth, 
    private route: ActivatedRoute, private router: Router) {
    // this.provider = new firebase.auth.GoogleAuthProvider();
    auth.authState.subscribe( user => {
      if (!user) {
        debugger
        this.isLoggedIn = false;
        this.user = undefined; 
        return;
      }
      this.isLoggedIn = true;
      this.user = user; 
    });

    firebase.auth().getRedirectResult().then(r =>{
      console.log(r)
    })

   }

  getProducts(){
    return this.store.collection<any>('products').snapshotChanges();
  }

  login() {
    let returnUrl = this.route.snapshot.paramMap.get('returnUrl') || '/';
    // localStorage.setItem('returnUrl', returnUrl);
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    .then( _ => {
      debugger
      this.router.navigateByUrl(returnUrl);
    })
    .catch(err => {
      this.router.navigateByUrl('/');
    })
  }

  logout() {
    this.auth.signOut();
  }
}

