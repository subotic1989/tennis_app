import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap } from 'rxjs';

import { LocationService } from './location.services';

import * as actions from './location.actions';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private router: Router,
    private service: LocationService
  ) {}

  initUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getWetterAction),
      switchMap(() => {
        return of(this.service.locationService('uid')).pipe(
          map((data) => {
            this.router.navigate(['/']);
            return actions.getWetterSuccessAction({ response: data });
          }),
          catchError((err) => {
            return of(actions.getWetterErrorAction({ error: err }));
          })
        );
      })
    )
  );
}
