import { LoginService } from './login/service/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { LoansComponent } from './loans/loans.component';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PersonalInformationComponent } from './register/components/personal-information/personal-information.component';
import { ContactInformationComponent } from './register/components/contact-information/contact-information.component';
import { ConfirmationComponent } from './register/components/confirmation/confirmation.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TextFieldModule } from '@angular/cdk/text-field';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationService } from './register/services/registration.service';
import { UserComponent } from './user/user.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserValidationComponent } from './user-validation/user-validation.component';
import { MatDividerModule } from '@angular/material/divider';
import { ProcessesTableComponent } from './landing-page/processes-table/processes-table.component';
import { ProcessesTreeComponent } from './landing-page/processes-tree/processes-tree.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { DataTableModule } from 'angular-6-datatable';


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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    RouterModule.forRoot([
      {path: '', component: LandingPageComponent },
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'credit-card', component: CreditCardComponent},
      {path: 'loans', component: LoansComponent},
      {path: 'user', component: UserComponent},
      {path: 'user-validation', component: UserValidationComponent},
      {path: '**', redirectTo: '' }

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
    DataTableModule
  ],
  providers: [
    MatDatepickerModule, 
    RegistrationService, 
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

