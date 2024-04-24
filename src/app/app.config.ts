import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor.service';
import { loadingInterceptor } from './interceptors/loading-interceptor.service';
import { provideStore } from '@ngrx/store';
import { reducer } from './store/counter/counter.reducer';
import { languageReducer } from './store/language/language.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([loadingInterceptor])),
    provideStore({
      counter: reducer,
      language: languageReducer,
    }),
  ],
};
