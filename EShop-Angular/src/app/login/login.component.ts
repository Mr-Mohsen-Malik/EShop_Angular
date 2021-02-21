import { Component, OnInit } from '@angular/core';
import { BaseService } from '../shared-services/base.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private bs:BaseService) { }

  ngOnInit(): void {
  }

  login(){
    this.bs.login();
  }

}
