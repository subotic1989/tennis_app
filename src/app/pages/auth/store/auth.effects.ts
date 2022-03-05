import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { getAuth, sendEmailVerification } from 'firebase/auth';

import { doc } from '@angular/fire/firestore';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, from, map, of, switchMap, tap } from 'rxjs';

import { AuthService } from './auth.services';

import * as actions from './auth.actions';

import { environment } from '../../../../environments/environment';

import { HotToastService } from '@ngneat/hot-toast';

import { errorOutputTransformFunction } from '@app/shared/utils/errorOutputTransform';

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

        return this.authService.registerUser(email, password).pipe(
          this.toast.observe({
            success: 'Congrats! You are all signed up',
            loading: 'Signing up...',
            error: ({ message }) => `${errorOutputTransformFunction(message)}`,
          }),

          tap((test) => {
            console.log(test);
            const auth = getAuth();
            sendEmailVerification(
              auth.currentUser,
              environment.firebase.actionCodeSettings
            );
            this.router.navigate(['/home']);
          }),
          map((data: any) => {
            const uid = data?.user.uid;
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
            error: ({ message }) => errorOutputTransformFunction(message),
          }),

          tap(() => this.router.navigate(['/home'])),
          map((data) => {
            console.log(data.user);

            return actions.loginSuccessAction({
              uid: data.user.uid,
              user: data.user.providerData[0],
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
          this.toast.observe({
            success: 'Signing out',
            loading: 'Signing out...',
            error: ({ message }) => errorOutputTransformFunction(message),
          }),
          map(() => {
            this.router.navigate(['/auth/login']);
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
