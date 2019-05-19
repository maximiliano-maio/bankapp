import { ContactInfo } from './../models/contactInfo';
import { Client } from './../models/client';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  client: Client;
  contactInfo: ContactInfo;
  clients: Client[] = [];

  constructor(private userService: UserService) {
    this.testSetClient();
  }

  ngOnInit() {
  }

  setClient() {
    this.userService.setClient(this.client).subscribe(c => {
      console.log(c);
    });
  }

  async getClient() {
    await this.userService.getAllClients().subscribe(c => {
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
