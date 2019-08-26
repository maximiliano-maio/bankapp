import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { BrowserStorageService } from './../../../shared/services/browser-storage.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent {

  streetFormControl = new FormControl();
  buildingNumberFormControl = new FormControl();
  entranceFormControl = new FormControl();
  apartmentFormControl = new FormControl();
  postalCodeFormControl = new FormControl();
  postalBoxFormControl = new FormControl();
  cityFormControl = new FormControl();
  telephoneFormControl = new FormControl();
  distributionFormControl = new FormControl();
  
  cellphoneFormControl = new FormControl('', [
    Validators.required
  ]);
  emailFormControl = new FormControl('', [
    Validators.required
  ]);
  

  @Output() contactInfoCompleted: EventEmitter<any> = new EventEmitter<any>();

  constructor(private browserStorageService: BrowserStorageService) { }

  saveContactInfo() {
    this.browserStorageService.setSessionStorageItem('street', this.streetFormControl.value);
    this.browserStorageService.setSessionStorageItem('street', this.streetFormControl.value );
    this.browserStorageService.setSessionStorageItem('building', this.buildingNumberFormControl.value );
    this.browserStorageService.setSessionStorageItem('entrance', this.entranceFormControl.value );
    this.browserStorageService.setSessionStorageItem('apartment', this.apartmentFormControl.value );
    this.browserStorageService.setSessionStorageItem('postalCode', this.postalCodeFormControl.value );
    this.browserStorageService.setSessionStorageItem('postalBox', this.postalBoxFormControl.value );
    this.browserStorageService.setSessionStorageItem('city', this.cityFormControl.value );
    this.browserStorageService.setSessionStorageItem('telephone', this.telephoneFormControl.value );
    this.browserStorageService.setSessionStorageItem('cellphone', this.cellphoneFormControl.value );
    this.browserStorageService.setSessionStorageItem('email', this.emailFormControl.value );
    this.browserStorageService.setSessionStorageItem('distribution', this.distributionFormControl.value );

    this.contactInfoCompleted.emit(1);

  }
  

}
