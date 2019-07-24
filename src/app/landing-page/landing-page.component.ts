import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { LoginComponent } from '../login/login.component';
import { User } from './../models/user';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnDestroy {
  
  subscription: Subscription;
  loginDialogOpened: Boolean;

  constructor(
    public dialog: MatDialog,
    private router: Router) {
    this.loginDialogOpened = false;
  }

  openDialog(): void {
    this.loginDialogOpened = true;
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      height: '400px'
    });
    dialogRef.componentInstance.loginResponse.subscribe((user: User) => {
      if (user)  {
        this.dialog.closeAll();
        this.router.navigate(['/account', user.hashcode]);
      }
      
    });

    this.subscription = dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed.');
      this.loginDialogOpened = false;
    });

  }

  ngOnDestroy(): void {
    if (this.subscription)
    this.subscription.unsubscribe();
  }

}
