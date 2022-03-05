import { createSelector, createFeatureSelector } from '@ngrx/store';
import { GetPlayersStateInterface } from './players.reducer';

export const getPlayersFeatureSelector =
  createFeatureSelector<GetPlayersStateInterface>('players');

export const getPlayersSelector = createSelector(
  getPlayersFeatureSelector,
  (state) => state.players
);

export const getPlayerSelector = createSelector(
  getPlayersFeatureSelector,
  (state) => state.player
);

export const loadingGetPlayersSelector = createSelector(
  getPlayersFeatureSelector,
  (state) => state.loading
);

export const errorGetPlayersSelector = createSelector(
  getPlayersFeatureSelector,
  (state) => state.error
);
