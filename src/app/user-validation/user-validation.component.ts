import { Client } from './../models/client';
import { BrowserStorageService } from './../shared/services/browser-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-validation',
  templateUrl: './user-validation.component.html',
  styleUrls: ['./user-validation.component.css']
})
export class UserValidationComponent implements OnInit {
  // 2: email, 3: sms 
  sending: number;
  client: Client;

  constructor(private browserStorageService: BrowserStorageService) { }

  async ngOnInit() {
    this.sending = await +this.browserStorageService.getSessionStorageItem('distribution');
    this.client = await this.browserStorageService.getClient();
  }

}
