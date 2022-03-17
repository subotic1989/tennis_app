import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { getAuth, sendEmailVerification } from 'firebase/auth';

import { doc, setDoc, getFirestore, collection } from '@angular/fire/firestore';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, from, map, of, switchMap, tap } from 'rxjs';

import { AuthService } from './auth.services';

import * as actions from './auth.actions';

import { environment } from '../../../../environments/environment';

import { errorOutputTransformFunction } from '@app/shared/utils/errorOutputTransform.service';
import { NotificationService } from '@app/shared/library/indicators/snack-bar/notification.service';
import { LocalStorageService } from '@app/shared/utils/localStorage.service';
import { CheckAdminService } from '@app/shared/utils/checkAdmin.service';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
    private notification: NotificationService,
    private localStorageService: LocalStorageService,
    private checkAdmin: CheckAdminService,
    private store: Store
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
          tap(() => {
            const auth = getAuth();

            sendEmailVerification(
              auth.currentUser,
              environment.firebase.actionCodeSettings
            );
          }),
          map((data) => {
            const db = getFirestore();
            const users = collection(db, 'users');

            setDoc(doc(users, data.user.uid), {
              email: data.user.email,
              uid: data.user.uid,
              role: ['user'],
            });

            const uid = data?.user.uid;

            this.localStorageService.set('uid', data?.user.uid);

            this.notification.success('Register Success!');

            this.router.navigate(['/home']);

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
          map((data) => {
            this.localStorageService.set('uid', data?.user.uid);

            this.notification.success('Login Success!');

            this.router.navigate(['/home']);

            this.checkAdmin.check().subscribe((data) => {
              this.store.dispatch(actions.isAdmin({ isAdmin: data }));
            });

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
          catchError(() => {
            return of(actions.signOutErrorAction());
          })
        );
      })
    )
  );
}
