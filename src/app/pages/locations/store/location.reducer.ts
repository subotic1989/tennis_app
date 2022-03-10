import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './location.actions';

export interface LocationStateInterface {
  loading: boolean | null;
  error: string | null;
  wetterData: any | null;
}

export const initState: LocationStateInterface = {
  loading: null,
  error: null,
  wetterData: null,
};

const locationReducer = createReducer(
  initState,

  //wetter
  on(
    actions.getWetterAction,
    (state): LocationStateInterface => ({
      ...state,
      loading: true,
      error: null,
    })
  ),

  on(
    actions.getWetterSuccessAction,
    (state, action): LocationStateInterface => ({
      ...state,
      loading: false,
      wetterData: action.response,
    })
  ),

  on(
    actions.getWetterErrorAction,
    (state, action): LocationStateInterface => ({
      ...state,
      loading: false,
      error: action.error,
    })
  )
);

export function reducerAuth(state: LocationStateInterface, action: Action) {
  return locationReducer(state, action);
}
