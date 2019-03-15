import { Client } from './../models/client';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  

  constructor(private http: HttpClient) { }


  setClient(): Client {
    throw new Error('Method not implemented.');
  }


}
