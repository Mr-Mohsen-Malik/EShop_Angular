import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../shared-services/auth.service';
import { UserService } from '../user-services/user.service';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private authSrvc: AuthService, private userSrvc: UserService) { }

  canActivate(){
      return this.authSrvc.appUser.pipe(
      map( user => user.isAdmin)
    );
      
    
  }
}
