import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './shared-services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EShop-Angular';

  constructor(private authSrvc: AuthService, private router: Router) {
  // authSrvc.user$.subscribe(user => {
  //     if(user){
  //       let returnUrl = localStorage.getItem('returnUrl') || '/';
  //       this.router.navigateByUrl(returnUrl);
  //     }
  //   })
  }

}
