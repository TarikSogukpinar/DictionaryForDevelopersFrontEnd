import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ToastService, AngularToastifyModule} from 'angular-toastify';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UpdateProfileComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatToolbarModule,
    AngularToastifyModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({positionClass: 'toast-bottom-right'}),
  ],
  providers: [ToastService]
})
export class AuthModule {
}
