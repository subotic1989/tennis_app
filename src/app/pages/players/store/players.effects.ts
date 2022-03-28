import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, delay, map, of, switchMap, take } from 'rxjs';

import * as actions from './players.actions';
import { GetPlayersService } from './players.services';

@Injectable()
export class GetPlayersEffect {
  constructor(
    private actions$: Actions,
    private getPlayersService: GetPlayersService
  ) {}

  getPlayers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getPlayersAction),
      switchMap(() => {
        return this.getPlayersService.getPlayers().pipe(
          delay(500),
          map((data: any) => {
            return actions.getPlayersSuccessAction({ response: data });
          }),

          catchError((err) => of(actions.getPlayersErrorAction({ error: err })))
        );
      })
    )
  );

  getPlayer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getPlayerAction),
      switchMap((data) => {
        return this.getPlayersService.getPlayer(data.request).pipe(
          delay(500),
          map((data: any) => {
            return actions.getPlayerSuccessAction({ response: data });
          }),

          catchError((err) => of(actions.getPlayerErrorAction({ error: err })))
        );
      })
    )
  );

  editPlayer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.editPlayerAction),
      switchMap((data) => {
        this.getPlayersService.editPlayer(data.id, data.user);
        return this.getPlayersService.getPlayer(data.user.name).pipe(
          map((data) => {
            return actions.editPlayerSuccessAction({ response: data });
          }),

          catchError((err) => {
            return of(actions.editPlayerErrorAction({ error: err }));
          })
        );
      })
    )
  );
}
