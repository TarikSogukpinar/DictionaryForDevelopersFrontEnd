import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from "./profile/profile.component";
import {LoginGuard} from "../guards/login.guard";
import {UpdateProfileComponent} from "./update-profile/update-profile.component";

const routes: Routes = [

  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [LoginGuard]},
  {path: 'update-profile', component: UpdateProfileComponent, canActivate: [LoginGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
