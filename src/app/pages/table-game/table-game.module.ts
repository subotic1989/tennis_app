import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableGameRoutingModule } from './table-game-routing.module';
import { TableGameComponent } from './table-game.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [TableGameComponent],
  imports: [CommonModule, TableGameRoutingModule, TranslateModule],
})
export class TableGameModule {}
