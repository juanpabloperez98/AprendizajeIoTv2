import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { IntroPageComponent } from './iot/page/intro-page/intro-page.component';
import { PresentonePageComponent } from './iot/page/presentone-page/presentone-page.component';
import { PresenttwoPageComponent } from './iot/page/presenttwo-page/presenttwo-page.component';
import { ApplicationPageComponent } from './iot/page/application-page/application-page.component';
import { PracticesPageComponent } from './iot/page/practices-page/practices-page.component';





//Modules
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroPageComponent,
    PresentonePageComponent,
    PresenttwoPageComponent,
    ApplicationPageComponent,
    PracticesPageComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
