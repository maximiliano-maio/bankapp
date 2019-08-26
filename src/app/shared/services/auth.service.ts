import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Client } from './../../models/client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }

  login(username: string, password: string): Observable<Object> {

    let url = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', url);

    const params = {
      'username': username,
      'password': password
    };
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let options = { headers: header };
    
    return this.http.post<Object>('/login/user', params, options);
  }

  isLoggedIn(hashcode: string) {

    if (hashcode == null) {
      this.router.navigate(['/']);
      return false;
    }

    let options = {
      params: {
        code: hashcode
      }
    };
    this.http.get<number>('/auth/authState', options).subscribe(
      (status: number) => {
        if (status < 1) {
          this.router.navigate(['/']);
          return false;
        }

        return true;
      }
    );
  }

  // TODO: implementation on server.
  logout(hashcode: string) {
    let options = {
      params: {
        code: hashcode
      }
    };
    this.http.get<boolean>('/logout', options).subscribe(
      (logout) => {
        if (logout) sessionStorage.removeItem('token');
    });
  }

  sendValidationCode(client: Client) {
    this.http.post<void>('/sendValidationCode', client).subscribe(() => {
      console.log('verfication code request sent..');
    });
  }

  validateCode(data: Object): Observable<boolean> {
    return this.http.post<boolean>('/validateCode', data);
  }

  setCredential(data: Object): Observable<boolean> {
    return this.http.post<boolean>('/setCredential', data);
  }
}
