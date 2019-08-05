import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountingService } from 'src/app/shared/services/accounting.service';

import { StandingOrder } from './../../../models/standingOrder';

@Component({
  selector: 'app-standing-orders',
  providers: [DatePipe],
  templateUrl: './standing-orders.component.html',
  styleUrls: ['./standing-orders.component.css']
})
export class StandingOrdersComponent {

  backToAccountPageUrl: String;
  url: String;
  minDate: Date;
  dateFormControl = new FormControl();
  reference: number;
  isProcessFinished: boolean;

  standingOrdersList: StandingOrder[];
  
  company: String;
  num: number;

  frecuencies = [
    { key: 1, name: 'שבועי' },
    { key: 2, name: 'חודשי' },
    { key: 3, name: 'שנתי' }
  ];
  

  constructor(
    private router: Router,
    private accoutingService: AccountingService,
    private datePipe: DatePipe) {
    this.backToAccountPageUrl = this.router.url.substring(0, this.router.url.lastIndexOf('/'));
    this.url = this.router.url;
    this.minDate = new Date();
    this.isProcessFinished = false;
    
  }

  setStandingOrder(data) {
    let hashcode = this.router.url.substring(9, this.router.url.lastIndexOf('/'));
    let date = this.datePipe.transform(this.dateFormControl.value, 'yyyy-MM-dd');
    Object.assign(data, { hashcode: hashcode });
    Object.assign(data, { date: date });
    
    // TEST ONLY
    console.log(data);
    
    this.accoutingService.setStandingOrder(data).subscribe(
      (res: any) => {
        this.reference = res['id'];
        if (this.reference) this.isProcessFinished = !this.isProcessFinished;
      }
    );
  }

  log(data) {
    console.log(data);
  }

  backToAccountPage() {
    this.router.navigate([this.backToAccountPageUrl]);
  }

  clear() {
    this.company = '';
    this.num = 0;

  }

  // Change Standing Order selected.
  changeStandingOrder(standingOrder: StandingOrder) {
    console.log(standingOrder);
  }

  refreshStandingOrderList() {
    let hashcode = this.router.url.substring(9, this.router.url.lastIndexOf('/'));

    this.accoutingService.getStandingOrders(hashcode);
  }

}
