import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPlayerAction } from '../../store/players.actions';
import {
  getPlayerSelector,
  loadingGetPlayersSelector,
} from '../../store/players.selectors';
import { PlayerResponseInterface } from '../../store/types/playerResponse.interface';

@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.scss'],
})
export class PlayerDashboardComponent implements OnInit {
  player$: Observable<PlayerResponseInterface>;
  loading$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.route.params.subscribe((params: Params) => {
      const query = params['player'];
      this.store.dispatch(getPlayerAction({ request: query }));
      this.player$ = this.store.pipe(select(getPlayerSelector));
      this.loading$ = this.store.pipe(select(loadingGetPlayersSelector));
    });
  }
}
