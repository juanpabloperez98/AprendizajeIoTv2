import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SecurityQuestionComponent } from './components/security-question/security-question.component';

export const securityIotRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'questions',
    component: SecurityQuestionComponent,
  },
];
