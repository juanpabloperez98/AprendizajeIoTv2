import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PrecodeComponent } from './components/precode/precode.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PrecodeComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    PrecodeComponent,
  ]
})
export class SharedModule { }
