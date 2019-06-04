import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  
  // Not implemented yet.. 
  constructor(
    private authService: AuthService,
    private router: Router) { }

 
}
