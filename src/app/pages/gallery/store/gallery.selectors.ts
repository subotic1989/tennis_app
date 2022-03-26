import { createSelector, createFeatureSelector } from '@ngrx/store';
import { GalleryStateInterface } from './gallery.reducer';

export const galleryState =
  createFeatureSelector<GalleryStateInterface>('gallery');

export const getGallerySelector = createSelector(
  galleryState,
  (state) => state.data
);

export const loadingGallerySelector = createSelector(
  galleryState,
  (state) => state.loading
);

export const errorGallerySelector = createSelector(
  galleryState,
  (state) => state.error
);
