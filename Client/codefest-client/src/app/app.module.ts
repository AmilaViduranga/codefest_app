import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { AppRouting }         from './app.routings';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { FormsModule }        from '@angular/forms';


import { AppComponent }       from './app.component';
import { LoginComponent }     from './login/login.component';
import { RegisterComponent }  from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionComponent } from './question/question.component';

import { BaseService }      from './base.service';
import { APIInfo }          from './Url.Statics';
import { LoginService }     from './login/login.service';
import { RegisterService }  from './register/register.service';
import { QuestionService }  from './question/question.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    BaseService,
    APIInfo,
    LoginService,
    RegisterService,
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
