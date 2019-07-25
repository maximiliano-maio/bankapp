import { AfterContentInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { Accounting } from './../../../models/accounting';
import { AccountingService } from './../../../shared/services/accounting.service';
import { UserService } from './../../../shared/services/user.service';

@Component({
  selector: 'app-ils-movements',
  templateUrl: './ils-movements.component.html',
  styleUrls: ['./ils-movements.component.css']
})
export class IlsMovementsComponent implements AfterContentInit {

  accountMovementsList;
  public balanceList: Accounting[];

  constructor(
    private router: Router,
    private accountingService: AccountingService,
    private userService: UserService) {
    let url = router.url.substring(0, router.url.lastIndexOf('/'));
    this.accountMovementsList = [
      { name: 'חזרה', link: url }
    ];
  }

  ngAfterContentInit() {
    let hashcode: string = this.userService.getHashcodeLocally();

    this.accountingService.getLongAccountBalances(hashcode).subscribe((accounting: Accounting[]) => {
      this.balanceList = accounting;
    });
  }

}
