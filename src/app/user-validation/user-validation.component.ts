import { Component, OnInit } from '@angular/core';

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
  // Contact Info - distribution 2: email, 3: sms 

  isRegistrationCompleted: boolean;
  client: Client;

  constructor(
    private browserStorageService: BrowserStorageService,
    private userService: UserService,
    private authService: AuthService) {
      this.isRegistrationCompleted = false;
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
    console.log(code);

    // TODO: Implement service to server to validate Code
  }

}
