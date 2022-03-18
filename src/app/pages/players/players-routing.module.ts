import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { PlayersComponent } from './players.component';

const routes: Routes = [
  {
    path: '',
    component: PlayersComponent,
    children: [
      {
        path: ':player/edit',
        component: EditPlayerComponent,
      },
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
