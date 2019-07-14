import { AfterContentInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Accounting } from './../models/accounting';
import { Client } from './../models/client';
import { AccountingService } from './../shared/services/accounting.service';
import { AuthService } from './../shared/services/auth.service';
import { UserService } from './../shared/services/user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements AfterContentInit {
  
  client: Client;
  balanceList: Accounting[];
  lastBalance: Accounting;
  currentUrl: String;
  creditCardDebt: number;

  balance: number = 10;
  balanceUSD: number = 10;

  creditCardQty: number;
  creditCardSubtitle: string;

  // shekelIcon = faShekelSign;
  userAccountList = [
    { name: 'כרטיס אשראי', link: 'credit-card' },
    { name: 'הלוואות', link: 'loans' },
    { name: 'הגדרות', link: 'config' }
  ];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private accountingService: AccountingService) { 
      
    }
  
  ngAfterContentInit() {
    let hashcode: string = this.route.snapshot.params.id || this.userService.getHashcodeLocally();
    this.authService.isLoggedIn(hashcode);

    this.userService.getClient(hashcode).subscribe(client => {
      this.client = client;
    });
      
    this.accountingService.getShortAccountBalances(hashcode).subscribe((accounting: Accounting[]) => {
      
      this.lastBalance = accounting[0];

      this.balanceList = accounting;
      this.currentUrl = this.router.url;
      
    });
  }
}
