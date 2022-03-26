import { createAction, props } from '@ngrx/store';

//Gallery

export const galleryAction = createAction('[GALLERY] Gallery: Start');
export const gallerySuccessAction = createAction(
  '[GALLERY] Gallery: Success',
  props<{ response: any }>()
);
export const galleryErrorAction = createAction(
  '[GALLERY] Gallery: Error',
  props<{ error: string }>()
);
