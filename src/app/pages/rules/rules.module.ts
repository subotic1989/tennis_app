import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesRoutingModule } from './rules-routing.module';
import { RulesComponent } from './rules.component';


@NgModule({
  declarations: [
    RulesComponent
  ],
  imports: [
    CommonModule,
    RulesRoutingModule
  ]
})
export class RulesModule { }
