import { ContactInfo } from 'src/app/models/contactInfo';

export class Client {
 
  constructor(c: ContactInfo) {
    this.contactInfo = c;
  }

  clientId: String;
  firstName: String;
  lastName: String;
  birthDate: String;
  maritalStatus: String;
  contactInfo: ContactInfo;

}
