import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import { RoutingModule } from './routing.module';
import { Data } from '../modules/data/data';

import { MailSendService } from '../modules/services/mailSendService/mailSend.service';

import { AppComponent } from './app.component';
import { ContentComponent } from '../modules/content/content.component';
import { ForgotPasswordComponent } from '../modules/forgot-password/forgot-password.component';
import { FullscreenDirective } from '../modules/directives/fullscreen.directive';
import { HeaderComponent } from '../modules/header/header.component';
import { PasswordComponent } from '../modules/password/password.component';
import { SigninComponent } from '../modules/signin/signin.component';
import { SignupComponent } from '../modules/signup/signup.component';
import { ToolbarComponent } from '../modules/toolbar/toolbar.component';
import { VerifyDialog } from '../modules/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FullscreenDirective,
    ForgotPasswordComponent,
    HeaderComponent,
    PasswordComponent,
    SigninComponent,
    SignupComponent,
    ToolbarComponent,
    VerifyDialog,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [MailSendService,Data],
  bootstrap: [AppComponent],
  entryComponents: [VerifyDialog]
})
export class AppModule { }
