import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TestStateInterface } from './test.reducer';

export const testState = createFeatureSelector<TestStateInterface>('test');

export const getTest = createSelector(testState, (state) => state.data);

export const loadingTestSelector = createSelector(
  testState,
  (state) => state.loading
);

export const errorTestSelector = createSelector(
  testState,
  (state) => state.error
);
