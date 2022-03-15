import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { getAuth, sendEmailVerification } from 'firebase/auth';

import { doc } from '@angular/fire/firestore';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, from, map, of, switchMap, tap } from 'rxjs';

import { AuthService } from './auth.services';

import * as actions from './auth.actions';

import { environment } from '../../../../environments/environment';

import { errorOutputTransformFunction } from '@app/shared/utils/errorOutputTransform.service';
import { NotificationService } from '@app/shared/library/indicators/snack-bar/notification.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LocalStorageService } from '@app/shared/utils/localStorage.service';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
    private notification: NotificationService,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private localStorageService: LocalStorageService
  ) {}

  initUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.initAction),
      switchMap(() => {
        return of(this.localStorageService.get('uid')).pipe(
          map((uid) => {
            return actions.initSuccessAction({ uid: uid });
          }),
          catchError((err) => {
            this.notification.error(errorOutputTransformFunction(err.code));
            return of(actions.initErrorAction({ error: err }));
          })
        );
      })
    )
  );

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.registerAction),
      switchMap((data) => {
        const { email, password } = data;

        return this.authService.registerUser(email, password).pipe(
          tap((test) => {
            // const auth = getAuth();
            // sendEmailVerification(
            //   auth.currentUser,
            //   environment.firebase.actionCodeSettings
            // );
            this.router.navigate(['/home']);
          }),
          map((data: any) => {
            this.notification.success('Register Success!');
            this.localStorageService.set('uid', data?.user.uid);
            const uid = data?.user.uid;
            return actions.registerSuccessAction({ response: uid });
          }),
          catchError((err) => {
            this.notification.error(errorOutputTransformFunction(err.code));
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
          tap(() => this.router.navigate(['/home'])),
          map((data) => {
            console.log(data);
            this.notification.success('Login Success!');
            // this.afAuth.authState.subscribe((data) => console.log(data));
            this.localStorageService.set('uid', data?.user.uid);

            return actions.loginSuccessAction({
              uid: data.user.uid,
            });
          }),
          catchError((err) => {
            this.notification.error(errorOutputTransformFunction(err.code));
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
            localStorage.removeItem('uid');
            this.notification.success('Signing out!');
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
