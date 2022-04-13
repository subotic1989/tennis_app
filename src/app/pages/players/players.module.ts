import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingTennisModule } from '@app/shared/library/indicators/loading-tennis/loading-tennis.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ChoosePlayerModule } from './component/player-choose/choose-player.module';
import { EditPlayerModule } from './component/player-edit/edit-player.module';
import { PlayerSidenavModule } from './component/player-sidenav/player-sidenav.module';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import { GetPlayersEffect } from './store/players.effects';
import { reducerGetPlayers } from './store/players.reducer';

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
