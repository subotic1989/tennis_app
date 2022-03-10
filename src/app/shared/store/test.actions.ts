import { createAction, props } from '@ngrx/store';
import { TestInterface } from './types/test.interface';

//test

export const testAction = createAction(
  '[TEST] Test: Start',
  props<{ request: TestInterface }>()
);
export const testSuccessAction = createAction(
  '[TEST] Test: Success',
  props<{ response: any }>()
);
export const testErrorAction = createAction(
  '[TEST] Test: Error',
  props<{ error: string }>()
);
