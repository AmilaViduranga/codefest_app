import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { AppRouting }         from './app.routings';
import { SimpleNotificationsModule } from 'angular2-notifications';


import { AppComponent }       from './app.component';
import { LoginComponent }     from './login/login.component';
import { RegisterComponent }  from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionComponent } from './question/question.component';


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
    AppRouting,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
