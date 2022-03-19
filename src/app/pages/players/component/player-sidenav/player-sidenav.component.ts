import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { PlayersService } from '../../players.service';
import { getPlayerAction } from '../../store/players.actions';
import { loadingGetPlayersSelector } from '../../store/players.selectors';

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
  @Input() playerId: string;

  constructor(private store: Store, private playersService: PlayersService) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.loading$ = this.store.pipe(select(loadingGetPlayersSelector));
    this.activeUserUnsubscribe = this.playersService.activeUser.subscribe(
      (activeUser) => {
        this.activeUser = activeUser;
      }
    );
  }

  onGetPlayer(query: string) {
    this.store.dispatch(getPlayerAction({ request: this.playerId }));
  }

  ngOnDestroy(): void {
    this.activeUserUnsubscribe.unsubscribe();
  }
}
