import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { QuestionsComponent } from './questions/questions.component';

export const microcontrollerRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path:'questions',
    component:QuestionsComponent,
  }
];
