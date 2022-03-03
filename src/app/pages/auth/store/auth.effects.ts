import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { getAuth, sendEmailVerification } from 'firebase/auth';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, from, map, of, switchMap, tap } from 'rxjs';

import { AuthService } from './auth.services';

import * as actions from './auth.actions';

import { environment } from '../../../../environments/environment';

import { HotToastService } from '@ngneat/hot-toast';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
    private toast: HotToastService
  ) {}

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.registerAction),
      switchMap((data) => {
        const { email, password } = data;

        return from(this.authService.registerUser(email, password)).pipe(
          this.toast.observe({
            success: 'Congrats! You are all signed up',
            loading: 'Signing up...',
            error: ({ message }) => `${message}`,
          }),
          tap(() => {
            const auth = getAuth();
            sendEmailVerification(
              auth.currentUser,
              environment.firebase.actionCodeSettings
            );
            this.router.navigate(['/home']);

            //test
          }),
          map((data: any) => {
            const uid = data.user.uid;
            return actions.registerSuccessAction({ response: uid });
          }),
          catchError((err) => {
            console.log(err);
            return of(actions.registerErrorAction({ error: err }));
          })
        );
      })
    )
  );

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loginAction),
      switchMap((data) => {
        const { email, password } = data.request;

        return from(this.authService.loginUser(email, password)).pipe(
          this.toast.observe({
            success: 'Congrats! You are all signed up',
            loading: 'Signing up...',
            error: ({ message }) => `${message}`,
          }),

          tap(() => this.router.navigate(['/home'])),
          map((data) => {
            return actions.loginSuccessAction({
              uid: data.user.uid,
              user: data.user,
            });
          }),
          catchError((err) => {
            return of(actions.loginErrorAction({ error: err }));
          })
        );
      })
    )
  );

  signOutUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.signOutAction),
      switchMap(() => {
        return from(this.authService.signOutUser()).pipe(
          map(() => {
            return actions.signOutSuccessAction();
          }),
          catchError((err) => {
            return of(actions.signOutErrorAction({ error: err }));
          })
        );
      })
    )
  );
}
