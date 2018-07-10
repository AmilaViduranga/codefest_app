/**
 * Created by Amila on 7/10/2018.
 */
import { RouterModule, Routes }       from "@angular/router";
import { LoginComponent }             from "./login/login.component";
import { RegisterComponent }          from './register/register.component';
import { QuestionComponent }          from './question/question.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'question',
    component: QuestionComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
  useHash: true
});
