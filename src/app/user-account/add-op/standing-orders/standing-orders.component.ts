import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-standing-orders',
  templateUrl: './standing-orders.component.html',
  styleUrls: ['./standing-orders.component.css']
})
export class StandingOrdersComponent {

  backToAccountPageUrl: String;

  public frecuency = [
    { key: 1, name: 'שבועי' },
    { key: 2, name: 'חודשי' },
    { key: 3, name: 'שנתי' }
  ];

  constructor(private router: Router) {
    this.backToAccountPageUrl = this.router.url.substring(0, this.router.url.lastIndexOf('/'));
  }


  

  verification(data) {
    let h = this.router.url.substring(9, this.router.url.lastIndexOf('/'));
    Object.assign(data, { hashcode: h });
    console.log(data);

    // TODO: Implement Service to establish 'Standing Orders'
  }
}
