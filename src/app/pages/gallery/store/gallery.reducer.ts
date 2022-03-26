import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './gallery.actions';

export interface GalleryStateInterface {
  loading: boolean | null;
  error: string | null;
  data: any | null;
}

export const initState: GalleryStateInterface = {
  loading: null,
  error: null,
  data: null,
};

const galleryReducer = createReducer(
  initState,

  //init
  on(
    actions.galleryAction,
    (state): GalleryStateInterface => ({
      ...state,
      loading: true,
      error: null,
    })
  ),

  on(
    actions.gallerySuccessAction,
    (state, action): GalleryStateInterface => ({
      ...state,
      loading: false,
      data: action.response,
    })
  ),

  on(
    actions.galleryErrorAction,
    (state, action): GalleryStateInterface => ({
      ...state,
      loading: false,
      error: action.error,
    })
  )
);

export function reducerGallery(state: GalleryStateInterface, action: Action) {
  return galleryReducer(state, action);
}
