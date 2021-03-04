import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/shared-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSrvc:AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authSrvc.login();
  }

}
