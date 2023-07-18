import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { introductionRoutes } from './introduction.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuestionsComponent } from './questions/questions.component';



@NgModule({
  declarations: [
    MainComponent,
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(introductionRoutes),
    SharedModule,
  ]
})
export class IntroductionModule { }
