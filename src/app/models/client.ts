import { ContactInfo } from './contactInfo';

export class Client {
  
 
  constructor(c) {
    this.contactInfo = c;
    
  }

  clientId: String;
  firstName: String;
  lastName: String;
  birthDate: String;
  maritalStatus: String;
  contactInfo: ContactInfo;

}
