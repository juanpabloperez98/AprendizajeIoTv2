import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { introductionRoutes } from './introduction.routing';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(introductionRoutes),
    SharedModule,
  ]
})
export class IntroductionModule { }
