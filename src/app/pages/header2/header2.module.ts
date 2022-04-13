import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header2Component } from './header2.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [Header2Component],
  imports: [CommonModule, RouterModule, TranslateModule],
  exports: [Header2Component],
})
export class Header2Module {}
