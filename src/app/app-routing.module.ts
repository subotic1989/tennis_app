import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { isAdminGuard } from './guards/isAdmin.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'static',
        loadChildren: () =>
          import('./pages/static/static.module').then((m) => m.StaticModule),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./pages/auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'static/home',
      },
    ],
  },
  {
    path: 'players',
    loadChildren: () =>
      import('./pages/players/players.module').then((m) => m.PlayersModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./pages/gallery/gallery.module').then((m) => m.GalleryModule),
    canActivate: [isAdminGuard],
    data: {
      expectedRoles: ['admin'],
    },
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./pages/locations/locations.module').then(
        (m) => m.LocationsModule
      ),
  },
  {
    path: 'new-player',
    loadChildren: () =>
      import('./pages/new-player/new-player.module').then(
        (m) => m.NewPlayerModule
      ),
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/static/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
