import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import { getAuth, sendEmailVerification } from 'firebase/auth';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, from, map, of, switchMap, tap } from 'rxjs';

import { AuthService } from './auth.services';

import * as actions from './auth.actions';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
    private afAuth: AngularFireAuth
  ) {}

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.registerAction),
      switchMap(({ request }) => {
        console.log('request');
        return from(this.authService.registerUser(request)).pipe(
          // tap(() => {
          //   const auth = getAuth();
          //   sendEmailVerification(
          //     auth.currentUser,
          //     environment.firebase.actionCodeSettings
          //   );
          //   this.router.navigate(['/home']);
          // }),
          map((data: any) => {
            const uid = data.user.uid;
            return actions.registerSuccessAction({ response: uid });
          }),
          catchError((err) => {
            return of(actions.registerErrorAction({ error: err }));
          })
        );
      })
    )
  );

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loginAction),
      switchMap((request) => {
        const email = request.request.email;
        const password = request.request.password;
        return from(this.authService.loginUser(email, password)).pipe(
          tap(() => this.router.navigate(['/home'])),
          map((data: any) => {
            return actions.loginSuccessAction({
              response: data.user,
              uid: data.user.id,
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
      switchMap(() =>
        from(this.afAuth.signOut()).pipe(
          map(() => actions.signOutSuccessAction()),
          catchError((err) => of(actions.signOutErrorAction({ error: err })))
        )
      )
    )
  );

  // signOutUser$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(actions.signOutAction),
  //     switchMap(() =>
  //       from(this.authService.signOutUser()).pipe(
  //         map(() => actions.signOutSuccessAction()),
  //         catchError((err) => {
  //           console.log(err);
  //           return of(actions.signOutErrorAction({ error: err }));
  //         })
  //       )
  //     )
  //   )
  // );
}
