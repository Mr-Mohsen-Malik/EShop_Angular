import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authSrvc: AuthService, private router: Router) { }

  canActivate(route: any, state: RouterStateSnapshot){
    return this.authSrvc.fbUser.pipe(map(user => {
      if(user) return true;
      this.router.navigate(['/login'], { queryParams: {returnUrl: state.url}});
      return false;
    })
    );
      
    
  }
}
