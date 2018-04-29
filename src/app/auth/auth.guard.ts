import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  // This is the AuthGuard that will validate user login

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (localStorage.getItem('userToken') != null) {

      return true;
    } else {

      this.router.navigate(['/sign-in']);
      return false;
    }
  }
}
