import { LoginService } from './service/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    private router: Router) { }
  
 log(username, password) {
   console.log(username);
   // console.log('password: ' + password);
 }

 login(username, password) {
   this.loginService.checkCredentials(username, password);

 }


}
