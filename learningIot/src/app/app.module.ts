import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';


//Modules


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
