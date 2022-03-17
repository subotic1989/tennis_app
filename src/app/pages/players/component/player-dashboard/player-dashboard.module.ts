import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerDashboardRoutingModule } from './player-dashboard-routing.module';
import { PlayerDashboardComponent } from './player-dashboard.component';
import { LoadingTennisModule } from '@app/shared/library/indicators/loading-tennis/loading-tennis.module';
import { ButtonPrimaryModule } from '@app/shared/library/buttons/button-primary/button-primary.module';

@NgModule({
  declarations: [PlayerDashboardComponent],
  imports: [
    CommonModule,
    PlayerDashboardRoutingModule,
    LoadingTennisModule,
    ButtonPrimaryModule,
  ],
})
export class PlayerDashboardModule {}
