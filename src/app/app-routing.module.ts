import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
