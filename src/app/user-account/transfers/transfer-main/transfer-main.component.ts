import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Accounting } from './../../../models/accounting';
import { Transfer } from './../../../models/transfer';
import { AccountingService } from './../../../shared/services/accounting.service';

@Component({
  selector: 'app-transfer-main',
  templateUrl: './transfer-main.component.html',
  styleUrls: ['./transfer-main.component.css']
})
export class TransferMainComponent {

  public reasons = [
    { key: 1, name: 'שכירות'},
    { key: 2, name: 'תשלום'},
    { key: 3, name: 'מתנה'},
    { key: 4, name: 'אחר'},
  ];

  // Navbar's links. Still nothing...
  transferMainList;
  
  firstConfirmation: boolean;
  secondConfirmation: boolean;
  error: boolean;
  returnedDataTransfer: Transfer;
  url: String;

  constructor(
    private router: Router,
    private accountingService: AccountingService) { 
    this.firstConfirmation = false;
    this.secondConfirmation = false;
    this.error = false;
    this.url = this.router.url;
  }

  verification(data) {
    let h = this.router.url.substring( 9 , this.router.url.lastIndexOf('/'));
    Object.assign(data, { hashcode: h });
    console.log(data);
    this.accountingService.verifyAccount(data).subscribe((d: Transfer) => {
      this.returnedDataTransfer = d;
      
      if (d.transferPossible) {
        this.firstConfirmation = true;
        this.error = false;
      } else {
        this.firstConfirmation = false;
        this.error = true;
      }
    });
    
  }

  approveTransfer() {
    this.accountingService.setTransfer(this.returnedDataTransfer).subscribe(
      (b: Accounting) => {
        console.log(b);
    });
  }

  cancelTransfer() {
    this.returnedDataTransfer = null;
    this.firstConfirmation = false;
    this.secondConfirmation = false;
    this.error = false;
    
    this.router.navigate([this.url]);
  }

}
