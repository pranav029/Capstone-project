import { inject } from '@angular/core';
import { CanActivateFn, CanDeactivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from './AuthService';


export const AuthGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).isUserLoggedIn()) return true;
  inject(Router).navigate(['/login']);
  return false;
};

export const AuthorizationGuard:CanActivateFn = (route,state)=>{
  if (inject(AuthService).isAdminUser()) return true;
  return false;
};

export const LoginGuard:CanActivateFn = (route, state) => {
  if (inject(AuthService).isUserLoggedIn()) return false;
  return true;
};

