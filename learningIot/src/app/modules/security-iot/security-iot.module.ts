import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main/main.component';
import { securityIotRoutes } from './security-iot.routing';

@NgModule({
  declarations: [MainComponent],
  imports: [SharedModule, RouterModule.forChild(securityIotRoutes)],
  exports: [RouterModule],
})
export class SecurityIotModule {}
