/* import { NgModule } from '@angular/core'; */
import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { QuestionsComponent } from './questions/questions.component';


export const redesRoutes: Routes =[
  {
    path:'main', component: MainComponent,
  },
  {
    path:'questions',
    component:QuestionsComponent
  }
];
