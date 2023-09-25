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

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PrecodeComponent,
    ButtonGoBackComponent,
    LearnMoreComponent,
    NextModuleComponent,
    SimulacionLucesComponent,

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
  ],
})
export class SharedModule {}
