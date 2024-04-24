import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  let _UserAuthSer = inject(UserAuthService);
  let router = inject(Router);

  if (_UserAuthSer.getUseLogged()) {
    return true;
  } else {
    _UserAuthSer.redirectUrl = state.url;
    router.navigate(['/Login']);
    return false;
  }
};
