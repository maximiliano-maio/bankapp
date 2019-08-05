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
  firstConfirmationData: Transfer;
  secondConfirmationData: Accounting;
  url: String;
  backToAccountPageUrl: String;

  constructor(
    private router: Router,
    private accountingService: AccountingService) { 
    this.firstConfirmation = false;
    this.secondConfirmation = false;
    this.error = false;
    this.url = this.router.url;
    this.backToAccountPageUrl = this.router.url.substring(0, this.router.url.lastIndexOf('/'));
    this.transferMainList = [
      { name: 'חזור לחשבונך', link: this.backToAccountPageUrl }
    ];
  }

  verification(data) {
    let h = this.router.url.substring( 9 , this.router.url.lastIndexOf('/'));
    Object.assign(data, { hashcode: h });
    this.accountingService.verifyAccount(data).subscribe((d: Transfer) => {
      this.firstConfirmationData = d;
      
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
    this.accountingService.setTransfer(this.firstConfirmationData).subscribe(
      (b: Accounting) => {
        this.secondConfirmationData = b;
        this.backToAccountPageUrl = this.router.url.substring(0, this.router.url.lastIndexOf('/'));
        console.log(this.backToAccountPageUrl);
        if (b.id) {
          this.secondConfirmation = true;
          this.firstConfirmation = false;
        } else {
          this.error = true;
          this.secondConfirmation = false;
          this.firstConfirmation = false;
        }
      
    });
  }

  cancelTransfer() {
    this.firstConfirmationData = null;
    this.firstConfirmation = false;
    this.secondConfirmation = false;
    this.error = false;
    
    this.router.navigate([this.url]);
  }

  backToAccountPage() {
    this.router.navigate([this.backToAccountPageUrl]);
  }

}
