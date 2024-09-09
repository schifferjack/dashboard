import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
];
