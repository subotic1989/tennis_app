import { ActionReducerMap } from '@ngrx/store';
import { AuthEffect } from './auth.effects';
import { AuthStateInterface, reducerAuth } from './auth.reducer';

export interface State {
  auth: AuthStateInterface;
}

export const reducers: ActionReducerMap<State> = {
  auth: reducerAuth,
};

export const effects = [AuthEffect];
