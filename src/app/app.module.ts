import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// animation module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Material components
import { MdCardModule, MdDatepickerModule, MdNativeDateModule, MdInputModule, DateAdapter } from '@angular/material';

// hammerJs
import 'hammerjs';

import { AppComponent } from './app.component';
// components
import { TimePickerComponent } from './time-picker/time-picker.component';
import { MaterialPickerComponent } from './material-picker/material-picker.component';
import { DurationCardComponent } from './components/duration-card/duration-card.component';
import { AboutComponent } from './about/about.component';
// import date adapter for Frensh standard
import { CustomDateAdapter } from './date-adapter/custom-date-picker';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


const appRoutes: Routes = [
  { path: 'time-picker', component: TimePickerComponent },
  { path: 'material-picker', component: MaterialPickerComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {
    path: '',
    redirectTo: '/time-picker',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TimePickerComponent,
    MaterialPickerComponent,
    DurationCardComponent,
    AboutComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [RouterModule.forRoot(
    appRoutes
    // ,{ enableTracing: true } // <-- debugging purposes only
  ),
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    MdCardModule, MdDatepickerModule, MdNativeDateModule, MdInputModule

  ],
  providers: [{ provide: DateAdapter, useClass: CustomDateAdapter }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('fr-br');
  }
}
