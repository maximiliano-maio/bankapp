import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

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
    private authService: AuthService) { }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe((user: User) => {
      if (!user) {
        this.loginResponse.emit(null);
      } else {
        this.loginResponse.emit(user);
        sessionStorage.setItem('token', user.hashcode);
      }
    });
    
    // TODO: Redirect to Account page
  }


}
