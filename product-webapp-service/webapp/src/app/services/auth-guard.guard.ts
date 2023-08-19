import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from './AuthService';


export const AuthGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).isUserLoggedIn()) return true;
  inject(Router).navigate(['/login']);
  return false;
};

