import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { presentationRoutes } from './presentation1.routing';
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
    RouterModule.forChild(presentationRoutes),
    FormsModule,
  ],
  exports:[RouterModule],
})
export class Presentation1Module { }
