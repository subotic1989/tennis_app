import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  activeUser = new Subject<null | string>();
  constructor() {}
}
