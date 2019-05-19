import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../shared/services/user.service';
import { BrowserStorageService } from './../shared/services/browser-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isConfirmationDisabled: boolean;
  isContactInfoDisabled: boolean;
  isPersonalInfoDisabled: boolean;
  tabSelected: number;

  constructor(
    private userService: UserService,
    private browserStorageService: BrowserStorageService,
    private route: Router) {
    
      this.isConfirmationDisabled = true;
      this.isContactInfoDisabled = true;
      this.isPersonalInfoDisabled = false;
    
      // Start from Zero, there 3 tabs:
      this.tabSelected = 2;
  }

  // Step 1 completed
  personalInfoProcess() {
    this.tabSelected = this.tabSelected - 1;
    this.isContactInfoDisabled = false;
  }
  // Step 2 completed
  contactInfoProcess() {
    this.tabSelected = this.tabSelected - 1;
    this.isConfirmationDisabled = false;
  }
  // Step 3, and last one, before user validation
  async confirmationProcess() {
    this.userService.setClient(
      await this.browserStorageService.getClient()
    );
    this.route.navigate(['/user-validation']);

  }

}
