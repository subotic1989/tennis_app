import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsavedPlayerGourd } from '@app/guards/unsavedPlayerEdit.guard';
import { EditPlayerComponent } from './component/player-edit/edit-player.component';
import { PlayersComponent } from './players.component';

const routes: Routes = [
  {
    path: '',
    component: PlayersComponent,
    children: [
      {
        path: ':player/edit',
        component: EditPlayerComponent,
        canDeactivate: [UnsavedPlayerGourd],
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
