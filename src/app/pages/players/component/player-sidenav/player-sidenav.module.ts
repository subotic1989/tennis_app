import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerSidenavComponent } from './player-sidenav.component';
import { LoadingTennisModule } from '@app/shared/library/indicators/loading-tennis/loading-tennis.module';

@NgModule({
  declarations: [PlayerSidenavComponent],
  imports: [CommonModule, LoadingTennisModule],
  exports: [PlayerSidenavComponent],
})
export class PlayerSidenavModule {}
