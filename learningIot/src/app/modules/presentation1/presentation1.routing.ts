import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";


export const presentationRoutes: Routes = [
  {
    path: '',
    children:[
      {
        path:'main', component:MainComponent,
      }
    ]
  }
]
