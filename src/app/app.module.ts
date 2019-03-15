import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { LogonComponent } from './logon/logon.component';
import { RegisterComponent } from './register/register.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { LoansComponent } from './loans/loans.component';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PersonalInformationComponent } from './register/personal-information/personal-information.component';
import { ContactInformationComponent } from './register/contact-information/contact-information.component';
import { ConfirmationComponent } from './register/confirmation/confirmation.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TextFieldModule } from '@angular/cdk/text-field';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LogonComponent,
    RegisterComponent,
    CreditCardComponent,
    LoansComponent,
    NavbarComponent,
    PersonalInformationComponent,
    ContactInformationComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    RouterModule.forRoot([
      {path: 'logon', component: LogonComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'credit-card', component: CreditCardComponent},
      {path: 'loans', component: LoansComponent}
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
    HttpClientModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

