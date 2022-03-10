import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActiveUserService {
  activeUser = new Subject<null | string>();
  constructor() {}
}
