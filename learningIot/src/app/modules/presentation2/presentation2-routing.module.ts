import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { QuestionsComponent } from './questions/questions.component';

export const presentation2Routes: Routes = [
  {
    path: '',
    children:[
      {
        path:'main', component:MainComponent,
      },
      {
        path:'questions',
        component:QuestionsComponent,
      }
    ]
  }
];
