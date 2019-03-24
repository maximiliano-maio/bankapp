import { Client } from './../../models/client';
import { Injectable } from '@angular/core';
import { ContactInfo } from 'src/app/models/contactInfo';

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {

  constructor() { }

  async deleteAllSessionStorage() {
    sessionStorage.clear();
  }

  async getSessionStorageItem(property: string): Promise<string> {
    return sessionStorage.getItem(property);
  }

  async setSessionStorageItem(property: string, value: string) {
    sessionStorage.setItem(property, value);
  }

  async getClient(): Promise<Client> {
    const contactInfo = new ContactInfo();
    contactInfo.apartment = await this.getSessionStorageItem('apartment');
    contactInfo.building = await this.getSessionStorageItem('building');
    contactInfo.cellphone = await this.getSessionStorageItem('cellphone');
    contactInfo.city = await this.getSessionStorageItem('city');
    contactInfo.distribution = await this.getSessionStorageItem('distribution');
    contactInfo.email = await this.getSessionStorageItem('email');
    contactInfo.entrance = await this.getSessionStorageItem('entrance');
    contactInfo.postalBox = await this.getSessionStorageItem('postalBox');
    contactInfo.postalCode = await this.getSessionStorageItem('postalCode');
    contactInfo.street = await this.getSessionStorageItem('street');
    contactInfo.telephone = await this.getSessionStorageItem('telephone');
    const client = new Client(contactInfo);
    client.firstName = await this.getSessionStorageItem('firstName');
    client.lastName = await this.getSessionStorageItem('lastName');
    client.clientId = await this.getSessionStorageItem('id');
    client.birthDate = await this.getSessionStorageItem('birthDate');
    client.maritalStatus = await this.getSessionStorageItem('maritalStatus');
    return client;
  }

}
