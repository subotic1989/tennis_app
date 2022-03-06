import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPlayerAction } from '../../store/players.actions';
import { loadingGetPlayersSelector } from '../../store/players.selectors';

@Component({
  selector: 'app-player-sidenav',
  templateUrl: './player-sidenav.component.html',
  styleUrls: ['./player-sidenav.component.scss'],
})
export class PlayerSidenavComponent implements OnInit {
  loading$: Observable<boolean>;

  @Input() playerName: string;
  @Input() playerImage: string;
  @Input() active: boolean;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.loading$ = this.store.pipe(select(loadingGetPlayersSelector));
  }

  getPlayer(query: string) {
    this.store.dispatch(getPlayerAction({ request: query }));
  }
}
