import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { presentationRoutes } from './presentation1.routing';




@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(presentationRoutes),
  ]
})
export class Presentation1Module { }
