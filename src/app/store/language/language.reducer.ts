import { createReducer, on } from '@ngrx/store';
import { changeLanguage } from './language.action';

const initialState = 'en';

export const languageReducer = createReducer(
  initialState,
  on(changeLanguage, (state, action) => action.lang)
);
