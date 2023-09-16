import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'introduccion',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/introduction/introduction.module').then(
            (m) => m.IntroductionModule
          ),
      },
    ],
  },
  {
    path: 'presentationOne',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/presentation1/presentation1.module').then(
            (m) => m.Presentation1Module
          ),
      },
    ],
  },
  {
    path: 'presentationTwo',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/presentation2/presentation2.module').then(
            (m) => m.Presentation2Module
          ),
      },
    ],
  },
  {
    path: 'aplicaciones',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/aplicaciones/aplicaciones.module').then(
            (m) => m.AplicacionesModule
          ),
      },
    ],
  },
  {
    path: 'redes',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/redes/redes.module').then((m) => m.RedesModule),
      },
    ],
  },
  {
    path: 'fundamentos',
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './modules/fundamentos-electronica/fundamentos-electronica.module'
          ).then((m) => m.FundamentosElectronicaModule),
      },
    ],
  },
  {
    path: 'microcontroller',
    loadChildren: () =>
      import('./modules/microcontroller/microcontroller.module').then(
        (m) => m.MicrocontrollerModule
      ),
  },
  {
    path: 'data-analysis',
    loadChildren: () =>
      import('./modules/data-analysis/data-analysis.module').then(
        (m) => m.DataAnalysisModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
