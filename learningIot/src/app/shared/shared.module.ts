import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PrecodeComponent } from './components/precode/precode.component';
import { ButtonGoBackComponent } from './components/button-go-back/button-go-back.component';
import { LearnMoreComponent } from './components/learn-more/learn-more.component';
import { NextModuleComponent } from './components/next-module/next-module.component';
import { RouterModule } from '@angular/router';
import { SimulacionLucesComponent } from './components/simulacion-luces/simulacion-luces.component';
import { AplicationCodeComponent } from './components/aplication-code/aplication-code.component';
import { SimulacionAgricolaComponent } from './components/simulacion-agricola/simulacion-agricola.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PrecodeComponent,
    ButtonGoBackComponent,
    LearnMoreComponent,
    NextModuleComponent,
    SimulacionLucesComponent,
    AplicationCodeComponent,
    SimulacionAgricolaComponent,

  ],
  imports: [CommonModule, RouterModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    PrecodeComponent,
    ButtonGoBackComponent,
    LearnMoreComponent,
    NextModuleComponent,
    SimulacionLucesComponent,
    AplicationCodeComponent,
    SimulacionAgricolaComponent,
  ],
})
export class SharedModule {}
