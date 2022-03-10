import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LocationStateInterface } from './location.reducer';

export const locationState =
  createFeatureSelector<LocationStateInterface>('location');

export const getWetter = createSelector(
  locationState,
  (state) => state.wetterData
);

export const loadingLocationSelector = createSelector(
  locationState,
  (state) => state.loading
);

export const errorLocationSelector = createSelector(
  locationState,
  (state) => state.error
);
