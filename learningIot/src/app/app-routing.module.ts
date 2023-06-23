import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component"

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'introduccion',
    children:[
      {
        path:'',
        loadChildren: () => import('./modules/introduccion/introduccion.module').then( m => m.IntroduccionModule)
      }
    ]
  }
]
