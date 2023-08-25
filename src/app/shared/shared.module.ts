import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PrecodeComponent } from './components/precode/precode.component';
import { ButtonGoBackComponent } from './components/button-go-back/button-go-back.component';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PrecodeComponent,
    ButtonGoBackComponent,

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    PrecodeComponent,
    ButtonGoBackComponent,

  ]
})
export class SharedModule { }
