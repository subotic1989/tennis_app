import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getPlayerAction } from '../../store/players.actions';
import { loadingGetPlayersSelector } from '../../store/players.selectors';
import { ActiveUserService } from '../players.service';

@Component({
  selector: 'app-player-sidenav',
  templateUrl: './player-sidenav.component.html',
  styleUrls: ['./player-sidenav.component.scss'],
})
export class PlayerSidenavComponent implements OnInit, OnDestroy {
  loading$: Observable<boolean>;
  activeUser: string;

  activeUserUnsubscribe: Subscription;

  @Input() playerName: string;
  @Input() playerImage: string;
  @Input() active: boolean;

  constructor(
    private store: Store,
    private activeUserService: ActiveUserService
  ) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.loading$ = this.store.pipe(select(loadingGetPlayersSelector));
    this.activeUserUnsubscribe = this.activeUserService.activeUser.subscribe(
      (activeUser) => {
        this.activeUser = activeUser;
      }
    );
  }

  onGetPlayer(query: string) {
    this.store.dispatch(getPlayerAction({ request: query }));
  }

  ngOnDestroy(): void {
    this.activeUserUnsubscribe.unsubscribe();
  }
}
