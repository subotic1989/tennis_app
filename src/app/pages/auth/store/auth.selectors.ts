import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthStateInterface } from './auth.reducer';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth');

export const getUser = createSelector(
  authFeatureSelector,
  (state) => state.user
);

export const loadingAuthSelector = createSelector(
  authFeatureSelector,
  (state) => state.loading
);

export const isAuthSelector = createSelector(
  authFeatureSelector,
  (state) => !!state.uid
);

export const errorAuthSelector = createSelector(
  authFeatureSelector,
  (state) => state.error
);

// export const getRoleId = createSelector(getUser, (user) => user && user.roleId);
