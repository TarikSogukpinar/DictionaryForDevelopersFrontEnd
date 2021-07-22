import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ToastService, AngularToastifyModule} from 'angular-toastify';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatToolbarModule,
    AngularToastifyModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ToastService]
})
export class AuthModule {
}
