import { createAction, props } from '@ngrx/store';

export const changeLanguage = createAction(
  'changeLanguage',
  props<{ lang: string }>()
);
