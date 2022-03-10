import { createAction, props } from '@ngrx/store';
import { LocationInterface } from './types/location.interface';

//Location

export const getWetterAction = createAction(
  '[LOCATION] Get wetter: Start',
  props<{ request: string }>()
);
export const getWetterSuccessAction = createAction(
  '[LOCATION] Get wetter: Success',
  props<{ response: any }>()
);
export const getWetterErrorAction = createAction(
  '[LOCATION] Get wetter: Error',
  props<{ error: string }>()
);
