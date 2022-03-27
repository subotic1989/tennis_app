import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerDashboardRoutingModule } from './player-dashboard-routing.module';
import { PlayerDashboardComponent } from './player-dashboard.component';
import { LoadingTennisModule } from '@app/shared/library/indicators/loading-tennis/loading-tennis.module';
import { ButtonPrimaryModule } from '@app/shared/library/buttons/button-primary/button-primary.module';
import { ButtonSecondaryModule } from '@app/shared/library/buttons/button-secondary/button-secondary.module';

@NgModule({
  declarations: [PlayerDashboardComponent],
  imports: [
    CommonModule,
    PlayerDashboardRoutingModule,
    LoadingTennisModule,
    ButtonPrimaryModule,
    ButtonSecondaryModule,
  ],
})
export class PlayerDashboardModule {}
