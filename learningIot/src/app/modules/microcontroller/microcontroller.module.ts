import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main/main.component';
import { microcontrollerRoutes } from './microcontroller.routing';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(microcontrollerRoutes),
    FormsModule,
  ],
  exports: [RouterModule],
})
export class MicrocontrollerModule {}
