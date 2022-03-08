import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthStateInterface } from './auth.reducer';

export const authState = createFeatureSelector<AuthStateInterface>('auth');

export const getUser = createSelector(authState, (state) => state.user);

export const loadingAuthSelector = createSelector(
  authState,
  (state) => state.loading
);

export const isAuthSelector = createSelector(authState, (state) => !!state.uid);

export const errorAuthSelector = createSelector(
  authState,
  (state) => state.error
);

// export const getRoleId = createSelector(getUser, (user) => user && user.roleId);
