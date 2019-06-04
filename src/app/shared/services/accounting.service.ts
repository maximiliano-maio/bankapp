import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Accounting } from './../../models/accounting';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {

  constructor(private http: HttpClient) { }

  getAccounting(hashcode: string): Observable<Accounting> {
    let options = {
      params: { code: hashcode}
    };
    return this.http.get<Accounting>('/getAccounting', options);
  }

}
