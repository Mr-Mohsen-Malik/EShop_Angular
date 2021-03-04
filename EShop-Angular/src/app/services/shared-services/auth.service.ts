import { Injectable,OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from '../user-services/user.service';
import { Observable, of } from 'rxjs';
import {  switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private provider: firebase.auth.GoogleAuthProvider;
  fbUser: Observable<firebase.User>;
  isLoggedIn:boolean = false;
  constructor(private userSrvc: UserService, private store: AngularFirestore, private auth: AngularFireAuth, 
    private route: ActivatedRoute, private router: Router) {
      this.fbUser = auth.authState;
   }

  getProducts(){
    return this.store.collection<any>('products').snapshotChanges();
  }

  checkUserStatus(){
    
  }

  login() {
    let returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then( user => {
      if (user.user) {
        this.userSrvc.save(user.user)
      }
      this.router.navigateByUrl(returnUrl);
    })
    .catch(err => {
      this.router.navigateByUrl('/');
    })
  }

  logout() {
    this.auth.signOut()
    .then(() => {
      this.router.navigateByUrl('/');
    })
  }

  get appUser(){
    return this.fbUser.pipe(
      switchMap(user => {
        if(user)
          return this.userSrvc.get(user.uid)
        return of(null);
      })
    );
  }
}

