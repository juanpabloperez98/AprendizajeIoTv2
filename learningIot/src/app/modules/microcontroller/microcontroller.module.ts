import { NgModule } from '@angular/core';
import { RouterModule,Routes  } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main/main.component';
import { microcontrollerRoutes } from './microcontroller.routing';
import { QuestionsComponent } from './questions/questions.component';
import { FormsModule } from '@angular/forms';


import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [MainComponent, QuestionsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(microcontrollerRoutes),
    DragDropModule,
    FormsModule,
  ],
  exports: [RouterModule],
})
export class MicrocontrollerModule {}
