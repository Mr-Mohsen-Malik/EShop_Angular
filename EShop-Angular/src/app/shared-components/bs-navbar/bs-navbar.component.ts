import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/shared-services/base.service';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  constructor(public bs:BaseService) { }

  ngOnInit(): void {
  }

  logout(){
    this.bs.logout();
  }
}
