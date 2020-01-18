import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // return true;

    // return new Promise<boolean>(resolve => {
    //   setTimeout(() => {
    //     resolve(true);
    //   }, 2000);
    // });

    return new Observable<boolean>(subscribe => {

      setTimeout(() => {
        subscribe.next(true);
        subscribe.complete();
      }, 2000);

    });

  }
}
