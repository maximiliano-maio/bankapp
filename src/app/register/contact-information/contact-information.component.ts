import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
    // Validators.required
  ]);
  buildingNumberFormControl = new FormControl('', [ 
    // Validators.required
  ]);
  entranceFormControl = new FormControl();
  apartmentFormControl = new FormControl('', [ 
    // Validators.required
  ]);
  postalCodeFormControl = new FormControl('', [ 
    // Validators.required
  ]);
  postalBoxFormControl = new FormControl();
  cityFormControl = new FormControl('', [ 
    // Validators.required
  ]);
  telephoneFormControl = new FormControl();
  cellphoneFormControl = new FormControl();
  emailFormControl = new FormControl();
  distributionFormControl = new FormControl('', [ 
    // Validators.required
  ]);

  @Output() contactInfoCompleted: EventEmitter<any> = new EventEmitter<any>();

  

  constructor() { }

  saveContactInfo() {
    sessionStorage.setItem('street', this.streetFormControl.value );
    sessionStorage.setItem('building', this.buildingNumberFormControl.value );
    sessionStorage.setItem('entrance', this.entranceFormControl.value );
    sessionStorage.setItem('apartment', this.apartmentFormControl.value );
    sessionStorage.setItem('postalCode', this.postalCodeFormControl.value );
    sessionStorage.setItem('postalBox', this.postalBoxFormControl.value );
    sessionStorage.setItem('city', this.cityFormControl.value );
    sessionStorage.setItem('telephone', this.telephoneFormControl.value );
    sessionStorage.setItem('cellphone', this.cellphoneFormControl.value );
    sessionStorage.setItem('email', this.emailFormControl.value );
    sessionStorage.setItem('distribution', this.distributionFormControl.value );

    this.contactInfoCompleted.emit(1);
  }
  

}
