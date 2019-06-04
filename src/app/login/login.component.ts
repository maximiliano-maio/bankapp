import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { User } from './../models/user';
import { AuthService } from './../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() loginResponse = new EventEmitter<User>(true);

  user: User;
  isLoginFailed = false;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService,
    private route: Router) { }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe((user: User) => {
      console.log(user);
      if (!user) {
        this.loginResponse.emit(null);
        this.isLoginFailed = true;
        console.log('is login failed: ' + this.isLoginFailed);
      } else {
        this.loginResponse.emit(user);
        this.isLoginFailed = false;
        console.log('is login failed: ' + this.isLoginFailed);
        sessionStorage.setItem('token', user.hashcode);
        
      }
      
      
    });
    
    // TODO: Redirect to Account page
  }


}
