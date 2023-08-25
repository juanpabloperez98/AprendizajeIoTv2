import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicacionesRoutingModule } from './aplicaciones-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuestionsComponent } from './questions/questions.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    AplicacionesRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class AplicacionesModule { }
