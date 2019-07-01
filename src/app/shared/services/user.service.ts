import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Client } from '../../models/client';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute) { }

  setClient(client: Client): Observable<Client> {
    return this.http.post<Client>('/registerclient', client);
  }

  getDistributionFromSessionStorage(): number {
    return +sessionStorage.getItem('distribution');
  }

  getClient(hashcode: string): Observable<Client> {
    let options = {
      params: { code: hashcode }
    };
    
    return this.http.get<Client>('/user', options);
  }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>('/getClients');
  }

  // TODO: Get Hashcode locally..
  getHashcodeLocally(): string {
    return sessionStorage.getItem('token');
  }

  
}
