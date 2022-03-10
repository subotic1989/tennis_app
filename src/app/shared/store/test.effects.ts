import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap } from 'rxjs';

import { TestService } from './test.services';

import * as actions from './test.actions';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private router: Router,
    private service: TestService
  ) {}

  initUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.testAction),
      switchMap(() => {
        return of(this.service.testService('uid')).pipe(
          map((data) => {
            this.router.navigate(['/']);
            return actions.testSuccessAction({ response: data });
          }),
          catchError((err) => {
            return of(actions.testErrorAction({ error: err }));
          })
        );
      })
    )
  );
}
