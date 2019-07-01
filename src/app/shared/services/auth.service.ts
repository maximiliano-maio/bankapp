import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private userService: UserService,
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
    
    return this.http.post<Object>('/login/user', {
      username: username,
      password: password
    }, options);
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
}
