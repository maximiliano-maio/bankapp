import { BrowserStorageService } from './../../../shared/services/browser-storage.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';


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

  streetFormControl = new FormControl('', [ 
    Validators.required
  ]);
  buildingNumberFormControl = new FormControl('', [ 
    Validators.required
  ]);
  entranceFormControl = new FormControl();
  apartmentFormControl = new FormControl('', [ 
    Validators.required
  ]);
  postalCodeFormControl = new FormControl('', [ 
    Validators.required
  ]);
  postalBoxFormControl = new FormControl();
  cityFormControl = new FormControl('', [ 
    Validators.required
  ]);
  telephoneFormControl = new FormControl();
  cellphoneFormControl = new FormControl();
  emailFormControl = new FormControl();
  distributionFormControl = new FormControl('', [ 
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
