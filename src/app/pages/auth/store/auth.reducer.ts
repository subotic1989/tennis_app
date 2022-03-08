import { createReducer, on, Action } from '@ngrx/store';
import { UserInterface } from './types/user.interface';
import * as actions from './auth.actions';

export interface AuthStateInterface {
  loading: boolean | null;
  user: UserInterface | null;
  error: string | null;
  uid: any | null;
}

export const initState: AuthStateInterface = {
  loading: null,
  user: null,
  error: null,
  uid: null,
};

const authReducer = createReducer(
  initState,

  //init
  on(
    actions.initAction,
    (state): AuthStateInterface => ({
      ...state,
      loading: true,
      error: null,
    })
  ),

  on(
    actions.initSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      loading: false,
      uid: action.uid,
    })
  ),

  on(
    actions.initErrorAction,
    (state, action): AuthStateInterface => ({
      ...state,
      loading: false,
      error: action.error,
    })
  ),
  //register
  on(
    actions.registerAction,
    (state): AuthStateInterface => ({
      ...state,
      loading: true,
      error: null,
    })
  ),

  on(
    actions.registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      loading: false,
      uid: action.response,
    })
  ),

  on(
    actions.registerErrorAction,
    (state, action): AuthStateInterface => ({
      ...state,
      loading: false,
      error: action.error,
    })
  ),

  //login

  on(
    actions.loginAction,
    (state): AuthStateInterface => ({
      ...state,
      loading: true,
    })
  ),

  on(
    actions.loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      loading: false,
      uid: action.uid,
    })
  ),

  on(
    actions.loginErrorAction,
    (state, action): AuthStateInterface => ({
      ...state,
      loading: false,
      error: action.error,
    })
  ),

  //signOut

  on(
    actions.signOutAction,
    (state): AuthStateInterface => ({
      ...state,
      loading: true,
    })
  ),

  on(
    actions.signOutSuccessAction,
    (state): AuthStateInterface => ({
      ...initState,
    })
  ),

  on(
    actions.signOutErrorAction,
    (state, action): AuthStateInterface => ({
      ...state,
      loading: false,
      error: action.error,
    })
  )
);

export function reducerAuth(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
