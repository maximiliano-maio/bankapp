import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Client } from './../models/client';
import { AuthService } from './../shared/services/auth.service';
import { BrowserStorageService } from './../shared/services/browser-storage.service';
import { UserService } from './../shared/services/user.service';

@Component({
  selector: 'app-user-validation',
  templateUrl: './user-validation.component.html',
  styleUrls: ['./user-validation.component.css']
})
export class UserValidationComponent implements OnInit {
  isRegistrationCompleted: boolean;
  isValidationFailed: boolean;
  isValidationCompleted: boolean;
  client: Client;

  isPasswordMatched: boolean;
  isRegistrationFinished: boolean;


  constructor(
    private browserStorageService: BrowserStorageService,
    private userService: UserService,
    private authService: AuthService,
    private route: Router) {
      this.isRegistrationCompleted = false;
      this.isPasswordMatched = false;
      this.isRegistrationFinished = false;
    }

  async ngOnInit() {
    let client: Client = await this.browserStorageService.getClient();
    
    // For information security
    sessionStorage.clear();
    this.userService.setClient(client).subscribe((c: Client) => {
      if (c) {
        console.log(c);
        this.client = c;
        this.isRegistrationCompleted = true;
        this.authService.sendValidationCode(c);
      }
    });
    // TODO: Implement case when Registration's process fails
  }

  validateCode(code: String) {
    const data = { 
      validationCode: code,
      clientId: this.client.clientId 
    };
    this.authService.validateCode(data).subscribe((isValidated: boolean) => {
      isValidated ? this.isValidationCompleted = true : this.isValidationCompleted = false;
    });
  }

  sendValidationCode() {
    this.isValidationFailed = false;

    this.authService.sendValidationCode(this.client);
  }

  passwordVerification(password1: string, password2: string) {
    console.log(this.isPasswordMatched);
    password1 === password2 ? this.isPasswordMatched = true : this.isPasswordMatched = false;
  }

  setCredential(userForm) {
    const data = {
      role: this.client.clientId,
      username: userForm.username,
      password: userForm.password1,
      mail: this.client.contactInfo.email
    };
    
    this.authService.setCredential(data).subscribe((isSetCredentialSuccessful: boolean) => {
      if (isSetCredentialSuccessful) {
        this.isRegistrationFinished = true;
        setTimeout(() => { 
          this.route.navigate(['/']);
        }, 1000);
      }
    });
  }

}
