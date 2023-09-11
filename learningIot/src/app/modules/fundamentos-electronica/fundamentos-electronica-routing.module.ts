import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const fundamentosElectronicaRoutes: Routes = [
  {
    path: '',
    children:[
      {
        path:'main', component:MainComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(fundamentosElectronicaRoutes)],
  exports: [RouterModule]
})
export class fundamentosElectronicaRoutingModule { }
