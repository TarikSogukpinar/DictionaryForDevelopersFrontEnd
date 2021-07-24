import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {NaviComponent} from './components/navi/navi.component';
import {FooterComponent} from './components/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {SssComponent} from './components/sss/sss.component';
import {ToastService, AngularToastifyModule} from 'angular-toastify';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NaviComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    SssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AngularToastifyModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),


  ],
  providers: [
    ToastService,
    {
      provide: 'apiUrl',
      useValue: 'https://localhost:5001/api/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
