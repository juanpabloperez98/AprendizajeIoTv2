import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { QuestionsComponent } from "./questions/questions.component";

export const introductionRoutes: Routes = [
  {
    path: '',
    children:[
      {
        path:'main',
        component:MainComponent,
      },
      {
        path:'questions',
        component:QuestionsComponent,
      }
    ]
  }
]
