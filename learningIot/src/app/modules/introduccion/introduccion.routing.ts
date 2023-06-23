import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";

export const introduccionRouting: Routes = [
  {
    path: '',
    children:[
      {
        path:'intro',
        component:MainComponent,
      },
    ]
  }
]
