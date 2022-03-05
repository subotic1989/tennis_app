import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, delay, from, map, of, switchMap, take, tap } from 'rxjs';

import * as actions from './players.actions';
import { GetPlayersService } from './players.services';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable()
export class GetPlayersEffect {
  constructor(
    private actions$: Actions,
    private router: Router,
    private getPlayersService: GetPlayersService,
    private afs: AngularFirestore
  ) {}

  getPlayers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getPlayersAction),
      switchMap(() => {
        return this.getPlayersService.getPlayers().pipe(
          delay(800),
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
          delay(1000),
          map((data: any) => {
            return actions.getPlayerSuccessAction({ response: data[0] });
          }),

          catchError((err) => of(actions.getPlayerErrorAction({ error: err })))
        );
      })
    )
  );
}

// this.afs
// .collection('players', (ref) => ref.where('born', '==', 1989))
// .valueChanges()
// .pipe(tap((data) => console.log(data)))
// .subscribe();
