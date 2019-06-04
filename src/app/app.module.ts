import { TextFieldModule } from '@angular/cdk/text-field';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular-6-datatable';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoansComponent } from './loans/loans.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProcessesTableComponent } from './processes/processes-table/processes-table.component';
import { ProcessesTreeComponent } from './processes/processes-tree/processes-tree.component';
import { ProcessesComponent } from './processes/processes/processes.component';
import { ConfirmationComponent } from './register/components/confirmation/confirmation.component';
import { ContactInformationComponent } from './register/components/contact-information/contact-information.component';
import { PersonalInformationComponent } from './register/components/personal-information/personal-information.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserValidationComponent } from './user-validation/user-validation.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CreditCardComponent,
    LoansComponent,
    NavbarComponent,
    PersonalInformationComponent,
    ContactInformationComponent,
    ConfirmationComponent,
    UserComponent,
    UserValidationComponent,
    LandingPageComponent,
    ProcessesTableComponent,
    ProcessesTreeComponent,
    LoginComponent,
    ProcessesComponent,
    UserAccountComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'account/:hashcode/credit-card', component: CreditCardComponent},
      { path: 'loans', component: LoansComponent},
      { path: 'user', component: UserComponent},
      { path: 'user-validation', component: UserValidationComponent},
      { path: 'account/:id', component: UserAccountComponent},
      { path: '', component: LandingPageComponent}
      // ,{ path: '**', redirectTo: '' }

    ]),
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    TextFieldModule,
    PdfViewerModule,
    HttpClientModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    DataTableModule,
    MatDialogModule
  ],
  providers: [
    MatDatepickerModule, 
    UserService, 
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

