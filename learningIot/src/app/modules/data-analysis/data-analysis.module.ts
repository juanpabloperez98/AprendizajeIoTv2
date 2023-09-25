import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { dataAnalysisRoutes } from './data-analysis.routing';
import { QuestionAnalysisComponent } from './components/question-analysis/question-analysis.component';
import { CardQuestionComponent } from './components/card-question/card-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MainComponent,
    QuestionAnalysisComponent,
    CardQuestionComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(dataAnalysisRoutes),
  ],
  exports: [RouterModule],
})
export class DataAnalysisModule {}
