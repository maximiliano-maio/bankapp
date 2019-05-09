import { ClientService } from './../service/client.service';
import { Client } from './../models/client';
import { RegistrationService } from './../register/services/registration.service';
import { Component, OnInit } from '@angular/core';
import { ContactInfo } from '../models/contactInfo';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  client: Client;
  contactInfo: ContactInfo;
  clients: Client[] = [];

  constructor(
    private registrationService: RegistrationService,
    private clientService: ClientService) {
      this.testSetClient();  
    }

  ngOnInit() {
  }

  setClient() {
    this.registrationService.setClient(this.client).subscribe(c => {
      console.log(c);
    });
  }

  async getClient() {
    await this.clientService.getClients().subscribe(c => {
      console.log(c);
      this.clients = c;
    });
  }

  testSetClient() {
    this.contactInfo = new ContactInfo();
    this.contactInfo.email = 'test@test.com';
    this.contactInfo.cellphone = '0524292553';

    this.client = new Client(this.contactInfo);
    this.client.firstName = 'firstname_test';
    this.client.lastName = 'lastname_test';
    this.client.clientId = '101102';


  }

}
