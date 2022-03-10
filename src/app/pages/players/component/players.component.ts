import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getPlayersAction } from '../store/players.actions';
import {
  getPlayersSelector,
  loadingGetPlayersSelector,
} from '../store/players.selectors';
import { PlayerResponseInterface } from '../store/types/playerResponse.interface';
import { ActiveUserService } from './players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  players$: Observable<PlayerResponseInterface[]>;
  loading$: Observable<boolean>;
  isChoose: boolean = true;

  constructor(
    private store: Store,
    private activeUserService: ActiveUserService
  ) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.store.dispatch(getPlayersAction());
    this.players$ = this.store.pipe(select(getPlayersSelector));
    this.loading$ = this.store.pipe(select(loadingGetPlayersSelector));
  }

  onSendActiveUser(user: string) {
    this.activeUserService.activeUser.next(user);
    this.isChoose = false;
  }
}
