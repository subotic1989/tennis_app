import { createReducer, on, Action } from '@ngrx/store';
import { UserInterface } from './types/user.interface';
import * as actions from './auth.actions';

export interface AuthStateInterface {
  loading: boolean;
  user: UserInterface;
  error: string;
  uid: string;
  isLoggedIn: boolean;
}

export const initState: AuthStateInterface = {
  loading: null,
  user: null,
  error: null,
  uid: null,
  isLoggedIn: null,
};

const authReducer = createReducer(
  initState,

  //register
  on(
    actions.registerAction,
    (state): AuthStateInterface => ({
      ...state,
      loading: true,
      user: null,
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
      user: null,
    })
  ),

  on(
    actions.loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      loading: false,
      user: action.response,
    })
  ),

  on(
    actions.loginErrorAction,
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
