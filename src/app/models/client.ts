import { ContactInfo } from './contactInfo';

export class Client {
  
  constructor(contactInfo: ContactInfo) {
    this.contactInfo = contactInfo;
  }
  
  public clientId: String;
  public firstName: String;
  public lastName: String;
  public birthDate: String;
  public maritalStatus: String;
  contactInfo: ContactInfo;

}
