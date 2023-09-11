import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { redesRoutes } from './redes-routing.module';
import { MainComponent } from './main/main.component';
import { QuestionsComponent } from './questions/questions.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(redesRoutes),
    FormsModule

  ],
  exports:[RouterModule],
})
export class RedesModule { }
