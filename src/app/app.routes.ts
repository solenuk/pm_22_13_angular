import { Routes } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {authGuard} from './service/auth.guard';
import {NotLauraComponent} from './not-laura/not-laura.component';

export const routes: Routes = [
  {path: '', component: MainPageComponent, canActivate: [authGuard]},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'not-laura', component: NotLauraComponent},
];
