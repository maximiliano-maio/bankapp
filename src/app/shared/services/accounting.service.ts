import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StandingOrder } from 'src/app/models/standingOrder';
import { Transfer } from 'src/app/models/transfer';

import { Accounting } from './../../models/accounting';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {
  
  setTransfer(returnedDataTransfer: Transfer): Observable<Accounting> {
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let options = {
      headers: header
    };

    return this.http.post<Accounting>('/setTransfer', returnedDataTransfer, options);

  }

  constructor(private http: HttpClient) { }

  getShortAccountBalances(hashcode: string): Observable<any> {
    let options = {
      params: { code: hashcode}
    };
    return this.http.get<any>('/getShortAccountBalances', options);
  }

  getLongAccountBalances(hashcode: string): Observable<any> {
    let options = {
      params: { code: hashcode }
    };
    return this.http.get<any>('/getLongAccountBalances', options);
  }

  verifyAccount(data: Object): Observable<any> {
        
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let options = {
      headers: header
    };

    return this.http.post<any>('/verifyTransferFromAccount', data, options);
  }

  setStandingOrder(data: Object): Observable<any> {
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let options = {
      headers: header
    };

    return this.http.post<any>('/setStandingOrder', data, options);

  }

  getStandingOrders(data: Object): Observable<StandingOrder[]> {
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let options = {
      headers: header
    };

    return this.http.post<any>('/setStandingOrder', data, options);
  }


}
