import { Component, OnInit } from '@angular/core';
import { MAT_TABS_CONFIG } from '@angular/material/tabs';
import { RegistrationService } from './registration.service';

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
  
  constructor(private registrationService: RegistrationService) {
    this.isConfirmationDisabled = true;
    this.isContactInfoDisabled = true;
    this.isPersonalInfoDisabled = false;
    this.tabSelected = 2;  
  }

  personalInfoProcess(event: number) {
    // event = 1 means step completed succesfully
    if (event !== 1) return null;
    this.tabSelected = this.tabSelected - 1;
    this.isContactInfoDisabled = false;
  }

  contactInfoProcess(event: number) {
    if (event !== 1) return null;
    this.tabSelected = this.tabSelected - 1;
    this.isConfirmationDisabled = false;
  }

  confirmationProcess(event: number) {
    if (event !== 1) return null;
    this.registrationService.setClient();
  }

}
