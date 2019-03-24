import { BrowserStorageService } from './../shared/services/browser-storage.service';
import { ContactInfo } from './../models/contactInfo';
import { Client } from './../models/client';
import { Component } from '@angular/core';
import { RegistrationService } from './services/registration.service';
import { Router } from '@angular/router';

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
    private registrationService: RegistrationService,
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
    this.registrationService.setClient(
      await this.browserStorageService.getClient()
    );
    this.route.navigate(['/user-validation']);
    
  }

}
