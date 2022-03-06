import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  player: PlayerResponseInterface;
  loading$: Observable<boolean>;

  countryFlag: string = 'https://flagcdn.com/w2560/ba.png';

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.route.params.subscribe(() => {
      this.store
        .pipe(select(getPlayerSelector))
        .subscribe((data: PlayerResponseInterface) => (this.player = data));

      this.loading$ = this.store.pipe(select(loadingGetPlayersSelector));
    });
  }
}
