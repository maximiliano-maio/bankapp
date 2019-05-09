import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  credentialUri = '/login/user';

  constructor(private http: HttpClient) { }

  checkCredentials(username: string, password: string) {
    const params = {
      'username': username,
      'password': password
    };
    this.http.post(this.credentialUri, {
      username: username,
      password: password
    }, {
      params: params
    }).subscribe(data => {
      console.log(data);
    });
  }

}
