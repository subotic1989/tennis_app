import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableGameRoutingModule } from './table-game-routing.module';
import { TableGameComponent } from './table-game.component';
import { TranslateModule } from '@ngx-translate/core';
import { RankingListPipe } from './pipes.pipe';

@NgModule({
  declarations: [TableGameComponent, RankingListPipe],
  imports: [CommonModule, TableGameRoutingModule, TranslateModule],
})
export class TableGameModule {}
