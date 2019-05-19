import { Component, Input, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from './../shared/services/auth.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  opened = false;
  menuIcon = faBars;
  closeIcon = faTimes;
  @Input('listItems') listItems: [];
  
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  closeSidenav() {
    this.opened = !this.opened;
  }

}
