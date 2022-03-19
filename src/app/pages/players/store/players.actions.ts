import { createAction, props } from '@ngrx/store';
import { PlayerResponseInterface } from './types/playerResponse.interface';

// get players
export const getPlayersAction = createAction(
  '[GET PLAYERS] Get players: Start'
);
export const getPlayersSuccessAction = createAction(
  '[GET PLAYERS] Get players: Success',
  props<{ response: PlayerResponseInterface[] }>()
);
export const getPlayersErrorAction = createAction(
  '[GET PLAYERS] Get players: Error',
  props<{ error: string }>()
);

// get player
export const getPlayerAction = createAction(
  '[GET PLAYER] Get player: Start',
  props<{ request: string }>()
);
export const getPlayerSuccessAction = createAction(
  '[GET PLAYER] Get player: Success',
  props<{ response: PlayerResponseInterface }>()
);
export const getPlayerErrorAction = createAction(
  '[GET PLAYER] Get player: Error',
  props<{ error: string }>()
);

// edit player
export const editPlayerAction = createAction(
  '[EDIT PLAYER] Edit player: Start',
  props<{ id: string; user: any }>()
);
export const editPlayerSuccessAction = createAction(
  '[EDIT PLAYER] Edit player: Success',
  props<{ response: any }>()
);
export const editPlayerErrorAction = createAction(
  '[EDIT PLAYER] Edit player: Error',
  props<{ error: string }>()
);
