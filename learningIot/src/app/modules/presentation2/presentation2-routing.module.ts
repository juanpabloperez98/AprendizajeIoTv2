import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const presentation2Routes: Routes = [
  {
    path: '',
    children:[
      {
        path:'main', component:MainComponent,
      }
    ]
  }
];
