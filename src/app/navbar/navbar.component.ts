import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from './../shared/services/auth.service';
import { UserService } from './../shared/services/user.service';

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
  
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private route: Router) { }

  ngOnInit() {
  }

  closeSidenav() {
    this.opened = !this.opened;
  }

  logout() {
    let hashcode = this.userService.getHashcodeLocally();
    this.authService.logout(hashcode);
    this.route.navigate(['/']);
  }

}
