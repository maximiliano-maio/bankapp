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

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService,
    private route: Router) { }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe((user: User) => {
      
      // for testing purpose:
      console.log(user);
      
      if (!user) {
        this.loginResponse.emit(null);
        console.log('login failed.');
      } else {
        this.loginResponse.emit(user);
        console.log('login succeed.');
        sessionStorage.setItem('token', user.hashcode);
        
      }
      
      
    });
    
    // TODO: Redirect to Account page
  }


}
