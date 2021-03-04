import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model';
import { AuthService } from 'src/app/services/shared-services/auth.service';
import { UserService } from 'src/app/services/user-services/user.service';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  user: User;
  constructor(public authSrvc:AuthService, public userSrvc:UserService) { 
    authSrvc.appUser.subscribe(_user => this.user = _user)
  }

  ngOnInit(): void {
  }

  logout(){
    this.authSrvc.logout();
  }
}
