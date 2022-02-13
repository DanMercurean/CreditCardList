import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DialogAddCardComponent } from './dialog-add-card/dialog-add-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaymentCardModule } from 'ngx-payment-card';

import { MomentDateModule } from '@angular/material-moment-adapter';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    CreditCardListComponent,
    DialogAddCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MomentDateModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaymentCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
