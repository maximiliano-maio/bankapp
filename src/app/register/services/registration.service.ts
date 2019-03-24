import { Client } from '../../models/client';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  

  constructor(private http: HttpClient) { }

  setClient(client: Client): Observable<Client> {
    return this.http.post<Client>('/registerclient', client);
  }

  getDistributionFromSessionStorage(): number {
    return +sessionStorage.getItem('distribution');
  }


}
