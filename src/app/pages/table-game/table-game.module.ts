import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableGameRoutingModule } from './table-game-routing.module';
import { TableGameComponent } from './table-game.component';
import { TranslateModule } from '@ngx-translate/core';
import { RankingListPipe } from './pipes.pipe';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducerGetPlayers } from '../players/store/players.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GetPlayersEffect } from '../players/store/players.effects';

@NgModule({
  declarations: [TableGameComponent, RankingListPipe],
  imports: [
    CommonModule,
    TableGameRoutingModule,
    TranslateModule,
    RouterModule,
    StoreModule.forFeature('players', reducerGetPlayers),
    EffectsModule.forFeature([GetPlayersEffect]),
  ],
})
export class TableGameModule {}
