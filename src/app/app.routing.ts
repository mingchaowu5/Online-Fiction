import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import {AuthenticationService} from './services/authentication.service.client';
import {AllBookComponent} from './components/home/all-book/all-book.component';
import {PeopleComponent} from './components/home/people/people.component';

const APP_ROUTES: Routes = [
  // { path : '', component : HomeComponent},
  { path : 'allbook' , component: AllBookComponent},
  { path : 'people' , component: PeopleComponent},
  { path : 'login' , component: LoginComponent},
  { path : 'register' , component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthenticationService] },
  // { path : 'user/:uid' , component: ProfileComponent},
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
