import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './component/players.component';

const routes: Routes = [
  {
    path: '',
    component: PlayersComponent,
    children: [
      {
        path: ':player',
        loadChildren: () =>
          import('./component/player-dashboard/player-dashboard.module').then(
            (m) => m.PlayerDashboardModule
          ),
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayersRoutingModule {}
