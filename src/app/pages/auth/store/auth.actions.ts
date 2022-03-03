import { createAction, props } from '@ngrx/store';
import { AuthRegisterRequest } from './types/authRegisterRequest.interface';
import { UserInterface } from './types/user.interface';

//register

export const registerAction = createAction(
  '[AUTH] Register with email: Start',
  props<{ email: string; password: string; displayName: string }>()
);
export const registerSuccessAction = createAction(
  '[AUTH] Register with email: Success',
  props<{ response: string }>()
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
  props<{ user: any; uid: string }>()
);
export const loginErrorAction = createAction(
  '[AUTH] Login with email: Error',
  props<{ error: string }>()
);

//sign out

export const signOutAction = createAction('[AUTH] SignOut: Start');
export const signOutSuccessAction = createAction('[AUTH] SignOut: Success');
export const signOutErrorAction = createAction(
  '[AUTH] SignOut: Error',
  props<{ error: string }>()
);

export const resetErrorAction = createAction('[AUTH] Reset Error');
