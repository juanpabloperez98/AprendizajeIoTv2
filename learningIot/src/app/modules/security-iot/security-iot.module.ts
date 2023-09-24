import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { securityIotRoutes } from './security-iot.routing';
import { SecurityQuestionComponent } from './components/security-question/security-question.component';
import { DragQuestionComponent } from './components/drag-question/drag-question.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MainComponent,
    SecurityQuestionComponent,
    DragQuestionComponent,
  ],
  imports: [
    SharedModule,
    DragDropModule,
    CommonModule,
    RouterModule.forChild(securityIotRoutes),
  ],
  exports: [RouterModule],
})
export class SecurityIotModule {}
