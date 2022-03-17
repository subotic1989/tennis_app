import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LocalStorageService } from '@app/shared/utils/localStorage.service';

@Injectable({
  providedIn: 'root',
})
export class isAdminGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private afs: AngularFirestore,
    private localStorageService: LocalStorageService
  ) {}

  private check(route: ActivatedRouteSnapshot | Route): Observable<boolean> {
    const expectedRoles = route.data['expectedRoles'];
    const uidLocalStorage = this.localStorageService.get('uid');
    const test = this.afs.collection('users').valueChanges();

    return test.pipe(
      map((users) => {
        return users.find((user) => {
          return user['uid'] == uidLocalStorage;
        });
      }),
      map((data: any) => {
        return data['role'].findIndex((rol) => {
          return expectedRoles.indexOf(rol) !== -1;
        });
      }),
      map((data) => {
        if (data > -1) {
          return true;
        } else {
          window.confirm('Admin section!');
          return false;
        }
      })
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.check(route);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.check(childRoute);
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.check(route);
  }
}
