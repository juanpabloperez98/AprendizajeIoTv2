import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { fundamentosElectronicaRoutingModule } from './fundamentos-electronica-routing.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    fundamentosElectronicaRoutingModule,
  ]
})
export class FundamentosElectronicaModule { }
