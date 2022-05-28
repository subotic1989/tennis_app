import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceNav {
  isLoggedIn = new Subject<boolean>();

  constructor() {}
}
