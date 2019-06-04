import { AfterContentInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Client } from './../models/client';
import { AuthService } from './../shared/services/auth.service';
import { UserService } from './../shared/services/user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements AfterContentInit {
  
  client: Observable<Client>;
  balance: number = 10;
  balanceUSD: number = 10;

  creditCardQty: number;
  creditCardSubtitle: string;

  // shekelIcon = faShekelSign;
  userAccountList = [
    { name: 'כרטיס אשראי', link: 'credit-card' },
    { name: 'הלוואות', link: 'loans' }
  ];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute) { 
      
    }
  
  async ngAfterContentInit() {
    let id: string = this.route.snapshot.params.id || this.userService.getHashcodeLocally();
    this.authService.isLoggedIn(id);
    await this.userService.getClient(id)
      .subscribe((client) => {
        console.log(client);
    });
  }

}
