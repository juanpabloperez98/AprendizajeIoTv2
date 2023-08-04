import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { QuestionsComponent } from './questions/questions.component';

const aplicacionesRoutes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(aplicacionesRoutes)],
  exports: [RouterModule]
})
export class AplicacionesRoutingModule { }
