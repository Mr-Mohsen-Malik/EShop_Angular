import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, SnapshotOptions } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map, switchMap, switchMapTo } from 'rxjs/operators';
import { User } from '../../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 user: User;
  constructor(private store: AngularFirestore, private auth: AngularFireAuth) { 
    
  }

  save(user: firebase.User){
    this.store.doc('/users/'+ user.uid).update({
      name: user.displayName,
      email: user.email
    })
  }

  get(uid: string): Observable<any>{
   return this.store.doc('/users/'+ uid).valueChanges();  
  }
}
