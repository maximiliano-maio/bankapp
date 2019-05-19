import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  user$: Observable<Object>;

  constructor(
    private authService: AuthService, 
    private router: Router) {
      this.user$ = this.authService.authState();
    }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.user$.pipe(
      map(user => { 
        if (user) return true;

        this.router.navigate(
          ['/login'], 
          {queryParams: { 
            returnUrl: state.url
          }});
        return false;
    }));
  }
}
