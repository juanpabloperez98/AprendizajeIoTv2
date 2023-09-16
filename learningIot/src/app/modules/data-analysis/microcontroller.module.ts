import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main/main.component';
import { dataAnalysisRoutes } from './microcontroller.routing';

@NgModule({
  declarations: [MainComponent],
  imports: [SharedModule, RouterModule.forChild(dataAnalysisRoutes)],
  exports: [RouterModule],
})
export class DataAnalysisModule {}
