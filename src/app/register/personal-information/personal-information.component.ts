import { Component, Output } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {

  object: Object = {};
  
  firstNameFormControl = new FormControl('', [
    // Validators.required,
    Validators.maxLength(30)
  ]);

  lastNameFormControl = new FormControl('', [
    // Validators.required,
    Validators.maxLength(30)
  ]);
  maritalStatusFormControl = new FormControl('', [
    // Validators.required
  ]);
  birthDateFormControl = new FormControl('', [
    // Validators.required
  ]);
  idNumberFormControl = new FormControl('', [
    // Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  @Output() personalInfoCompleted: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  savePersonalInformation() {
    sessionStorage.setItem('id', this.idNumberFormControl.value); 
    sessionStorage.setItem('firstName', this.firstNameFormControl.value);
    sessionStorage.setItem('lastName', this.lastNameFormControl.value);
    sessionStorage.setItem('maritalStatus', this.maritalStatusFormControl.value);
    // sessionStorage.setItem('birthDate', this.birthDateFormControl.value.toDateString());
    this.personalInfoCompleted.emit(1);
  }

}
