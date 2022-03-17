import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { LocalStorageService } from './localStorage.service';

@Injectable({
  providedIn: 'root',
})
export class CheckAdminService {
  constructor(
    private afs: AngularFirestore,
    private localStorageService: LocalStorageService
  ) {}

  check(): any {
    const uidLocalStorage = this.localStorageService.get('uid');
    const usersObservable = this.afs.collection('users').valueChanges();
    return usersObservable.pipe(
      map((users) => users.find((user) => user['uid'] == uidLocalStorage)),
      map((data: any) => {
        console.log(data);
        return data?.['role'].includes('admin') ? true : false;
      })
    );
  }
}
