import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { fundamentosElectronicaRoutingModule } from './fundamentos-electronica.routing';
import { QuestionsComponent } from './questions/questions.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    fundamentosElectronicaRoutingModule,
    FormsModule,
  ]
})
export class FundamentosElectronicaModule { }
