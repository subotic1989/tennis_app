import { createAction, props } from '@ngrx/store';
import { AuthRegisterRequest } from './types/authRegisterRequest.interface';

//init
export const initAction = createAction('[INIT] Init user: Start');
export const initSuccessAction = createAction(
  '[INIT] Init user: Success',
  props<{ uid: string }>()
);
export const initErrorAction = createAction(
  '[INIT] Init user: Error',
  props<{ error: string }>()
);

//register
export const registerAction = createAction(
  '[AUTH] Register with email: Start',
  props<{ email: string; password: string }>()
);
export const registerSuccessAction = createAction(
  '[AUTH] Register with email: Success',
  props<{ response: any }>()
);
export const registerErrorAction = createAction(
  '[AUTH] Register with email: Error',
  props<{ error: string }>()
);

//login
export const loginAction = createAction(
  '[AUTH] Login with email: Start',
  props<{ request: AuthRegisterRequest }>()
);
export const loginSuccessAction = createAction(
  '[AUTH] Login with email: Success',
  props<{ uid: string }>()
);
export const loginErrorAction = createAction(
  '[AUTH] Login with email: Error',
  props<{ error: string }>()
);

//sign out
export const signOutAction = createAction('[AUTH] SignOut: Start');
export const signOutSuccessAction = createAction('[AUTH] SignOut: Success');
export const signOutErrorAction = createAction('[AUTH] SignOut: Error');

// isAdmin
export const isAdmin = createAction(
  '[AUTH] Check is Admin',
  props<{ isAdmin: boolean }>()
);
