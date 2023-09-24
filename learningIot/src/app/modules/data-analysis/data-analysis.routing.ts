import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { QuestionAnalysisComponent } from './components/question-analysis/question-analysis.component';

export const dataAnalysisRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'questions',
    component: QuestionAnalysisComponent,
  },
];
