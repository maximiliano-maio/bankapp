import { Component, OnInit } from '@angular/core';

import { UserService } from './../shared/services/user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  username: string;
  // shekelIcon = faShekelSign;
  userAccountList = [
    '',
    '',
    '',
    '',
    '',
    '',

  ];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getClient(
      sessionStorage.getItem('token')
    );

    this.username =  this.userService.getClientlocally();
  }

}
