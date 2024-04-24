import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { inject } from '@angular/core';

export function loadingInterceptor(req: HttpRequest<any>, next: HttpHandlerFn) {
  const loadingSer = inject(LoaderService);
  loadingSer.setLoading(true);
  environment.totalRequests++;
  return next(req).pipe(
    finalize(() => {
      environment.totalRequests--;
      if (environment.totalRequests == 0) {
        loadingSer.setLoading(false);
      }
    })
  );
}
