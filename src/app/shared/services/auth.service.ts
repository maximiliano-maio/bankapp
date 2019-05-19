import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute) { }

  login(username: string, password: string): Observable<Object> {
    let url = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', url);
    const params = {
      'username': username,
      'password': password
    };
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post<Object>('/login/user', {
      username: username,
      password: password
    });

     
     

  }

  authState() {
    return this.http.get<Object>('/auth/authState');
  }

  logout() {
    // TODO: Implement logout
  }
}
