import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayerSidenavModule } from '@app/pages/players/component/player-sidenav/player-sidenav.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducerGetPlayers } from './store/players.reducer';
import { GetPlayersEffect } from './store/players.effects';
import { RouterModule } from '@angular/router';
import { LoadingTennisModule } from '@app/shared/library/indicators/loading-tennis/loading-tennis.module';
import { ChoosePlayerModule } from './component/player-choose/choose-player.module';
import { PlayersComponent } from './players.component';
import { EditPlayerModule } from './component/player-edit/edit-player.module';

@NgModule({
  declarations: [PlayersComponent],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    PlayerSidenavModule,
    RouterModule,
    LoadingTennisModule,
    ChoosePlayerModule,
    EditPlayerModule,
    StoreModule.forFeature('players', reducerGetPlayers),
    EffectsModule.forFeature([GetPlayersEffect]),
  ],
})
export class PlayersModule {}
