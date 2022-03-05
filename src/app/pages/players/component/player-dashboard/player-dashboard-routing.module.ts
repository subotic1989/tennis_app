import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerDashboardComponent } from './player-dashboard.component';

const routes: Routes = [{ path: '', component: PlayerDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerDashboardRoutingModule { }
