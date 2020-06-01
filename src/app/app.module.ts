import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { MasterModule } from './master/master.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashboardComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MasterModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
