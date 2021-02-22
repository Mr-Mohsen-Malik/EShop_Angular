import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authSrvc: AuthService, private router: Router) { }

  canActivate(route: any, state: RouterStateSnapshot){
    if( this.authSrvc.isLoggedIn && this.authSrvc.user){
      return true;
    }
    this.router.navigate(['/login'], { queryParams: {returnUrl: state.url}});
    return false;
  }
}
