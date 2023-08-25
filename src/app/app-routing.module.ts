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
        loadChildren: () => import('./modules/introduction/introduction.module').then( m => m.IntroductionModule)
      }
    ]
  },
  {
    path: 'presentationOne',
    children:[
      {
        path:'',
        loadChildren: () => import('./modules/presentation1/presentation1.module').then( m => m.Presentation1Module)
      }
    ]
  },
  {
    path: 'presentationTwo',
    children:[
      {
        path:'',
        loadChildren: () => import('./modules/presentation2/presentation2.module').then( m => m.Presentation2Module)
      }
    ]
  },
  {
    path: 'aplicaciones',
    children:[
      {
        path:'',
        loadChildren: () => import('./modules/aplicaciones/aplicaciones.module').then( m => m.AplicacionesModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo:'',
  },
];


