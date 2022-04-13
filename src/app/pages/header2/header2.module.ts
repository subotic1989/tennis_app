import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header2Component } from './header2.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [Header2Component],
  imports: [CommonModule, RouterModule, TranslateModule, HttpClientModule],
  exports: [Header2Component],
})
export class Header2Module {}
