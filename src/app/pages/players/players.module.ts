import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './component/players.component';
import { PlayerSidenavModule } from '@app/pages/players/component/player-sidenav/player-sidenav.module';
import { StoreModule } from '@ngrx/store';
import { reducerGetPlayers } from './store/players.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GetPlayersEffect } from './store/players.effects';
import { RouterModule } from '@angular/router';
import { LoadingTennisModule } from '@app/shared/library/indicators/loading-tennis/loading-tennis.module';

@NgModule({
  declarations: [PlayersComponent],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    PlayerSidenavModule,
    RouterModule,
    LoadingTennisModule,
    StoreModule.forFeature('players', reducerGetPlayers),
    EffectsModule.forFeature([GetPlayersEffect]),
  ],
})
export class PlayersModule {}
