import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

export const guardGuard: CanActivateFn = (route, state) => {
  const navigationService = inject(AuthService);
  const token = localStorage.getItem('token');
  return token ? true : navigationService.router.navigateByUrl('/home');
};
