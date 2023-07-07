import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component"
import { NgModule } from "@angular/core";
import { IntroPageComponent } from "./iot/page/intro-page/intro-page.component";
import { PresentonePageComponent } from "./iot/page/presentone-page/presentone-page.component";
import { PresenttwoPageComponent } from "./iot/page/presenttwo-page/presenttwo-page.component";
import { ApplicationPageComponent } from "./iot/page/application-page/application-page.component";
import { PracticesPageComponent } from "./iot/page/practices-page/practices-page.component";



export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'introduction',
    component:IntroPageComponent,
  },
  {
    path: 'presentone',
    component:PresentonePageComponent,
  },
  {
    path: 'presenttwo',
    component:PresenttwoPageComponent,
  },
  {
    path: 'application',
    component:ApplicationPageComponent,
  },
  {
    path: 'practices',
    component:PracticesPageComponent,
  },
  {
    path: '**',
    redirectTo:'',
  },

  // {
  //   path: 'introduccion',
  //   children:[
  //     {
  //       path:'',
  //       loadChildren: () => import('./modules/introduccion/introduccion.module').then( m => m.IntroduccionModule)
  //     }
  //   ]
  // }
]


@NgModule({
  imports:[
    RouterModule.forRoot(AppRoutes), // Este modulo dep
  ],
  exports:[
    RouterModule,
  ]

})

export class AppRoutingModule{}


