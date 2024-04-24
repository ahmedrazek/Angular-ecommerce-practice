import {
  HttpEventType,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { tap } from 'rxjs';

export function authInterceptor(req: HttpRequest<any>, next: HttpHandlerFn) {
  //   console.log(req);
  let ModifiedReq = req;
  if (req.method == 'GET') {
    ModifiedReq = req.clone({
      headers: req.headers.append('lang', 'en'),
    });
  }
  return next(ModifiedReq).pipe(
    tap((event) => {
      if (event.type == HttpEventType.Response) {
        console.log(event);
      }
    })
  );
}
