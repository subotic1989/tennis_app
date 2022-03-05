import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './players.actions';
import { PlayerResponseInterface } from './types/playerResponse.interface';

export interface GetPlayersStateInterface {
  loading: boolean | null;
  players: PlayerResponseInterface[] | null;
  player: PlayerResponseInterface | null;
  error: string | null;
}

export const initState: GetPlayersStateInterface = {
  loading: null,
  players: null,
  error: null,
  player: null,
};

const authReducer = createReducer(
  initState,
  // get players
  on(
    actions.getPlayersAction,
    (state): GetPlayersStateInterface => ({
      ...state,
      loading: true,
      error: null,
    })
  ),

  on(
    actions.getPlayersSuccessAction,
    (state, action): GetPlayersStateInterface => ({
      ...state,
      loading: false,
      players: action.response,
    })
  ),

  on(
    actions.getPlayersErrorAction,
    (state, action): GetPlayersStateInterface => ({
      ...state,
      loading: false,
      error: action.error,
    })
  ),
  // get player
  on(
    actions.getPlayerAction,
    (state): GetPlayersStateInterface => ({
      ...state,
      loading: true,
      error: null,
    })
  ),

  on(
    actions.getPlayerSuccessAction,
    (state, action): GetPlayersStateInterface => ({
      ...state,
      loading: false,
      player: action.response,
    })
  ),

  on(
    actions.getPlayerErrorAction,
    (state, action): GetPlayersStateInterface => ({
      ...state,
      loading: false,
      error: action.error,
    })
  )
);

export function reducerGetPlayers(
  state: GetPlayersStateInterface,
  action: Action
) {
  return authReducer(state, action);
}
