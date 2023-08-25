import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {presentation2Routes } from './presentation2-routing.module';
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
    SharedModule,
    RouterModule.forChild(presentation2Routes),
    FormsModule,
  ],
  exports:[RouterModule],
})
export class Presentation2Module { }
