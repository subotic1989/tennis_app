import { ActionReducerMap } from '@ngrx/store';
import { AuthEffect } from './players.effects';
import { AuthStateInterface, reducerAuth } from './players.reducer';

export interface State {
  auth: AuthStateInterface;
}

export const reducers: ActionReducerMap<State> = {
  auth: reducerAuth,
};

export const effects = [AuthEffect];
