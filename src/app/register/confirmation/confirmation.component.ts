import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {

  confirmationChecked = false;
  isConfirmationDisabled = false;
  src: String;

  @Output('confirmationCompleted') confirmationCompleted: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.src = 'assets/poison_permit_general.pdf';
  }

  conditionsAccepted() {
    this.confirmationCompleted.emit(1);
  }

}
