import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MonacoEditorModule } from 'ngx-monaco-editor';



import { AppRoutes } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HighlightService } from './services/highlight.service';



//Modules
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MonacoEditorModule.forRoot(),
    RouterModule.forRoot(AppRoutes,{
      scrollPositionRestoration: 'top',
    }),
    SharedModule,
  ],
  providers: [
    HighlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
