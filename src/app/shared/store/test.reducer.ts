import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './test.actions';

export interface TestStateInterface {
  loading: boolean | null;
  error: string | null;
  data: any | null;
}

export const initState: TestStateInterface = {
  loading: null,
  error: null,
  data: null,
};

const testReducer = createReducer(
  initState,

  //init
  on(
    actions.testAction,
    (state): TestStateInterface => ({
      ...state,
      loading: true,
      error: null,
    })
  ),

  on(
    actions.testSuccessAction,
    (state, action): TestStateInterface => ({
      ...state,
      loading: false,
      data: action.response,
    })
  ),

  on(
    actions.testErrorAction,
    (state, action): TestStateInterface => ({
      ...state,
      loading: false,
      error: action.error,
    })
  )
);

export function reducerAuth(state: TestStateInterface, action: Action) {
  return testReducer(state, action);
}
