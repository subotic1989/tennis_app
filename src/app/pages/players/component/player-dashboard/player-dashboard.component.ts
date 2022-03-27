import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isAdminSelector } from '@app/pages/auth/store/auth.selectors';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PlayerResponseInterface } from '../../store/types/playerResponse.interface';
import {
  getPlayerSelector,
  loadingGetPlayersSelector,
} from '../../store/players.selectors';
import { PlayersService } from '../../players.service';

@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.scss'],
})
export class PlayerDashboardComponent implements OnInit {
  player: PlayerResponseInterface;

  loading$: Observable<boolean>;
  isAdmin$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private playersService: PlayersService
  ) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.route.params.subscribe(() => {
      this.store
        .pipe(select(getPlayerSelector))
        .subscribe((data: PlayerResponseInterface) => (this.player = data));

      this.loading$ = this.store.pipe(select(loadingGetPlayersSelector));
      this.isAdmin$ = this.store.pipe(select(isAdminSelector));
    });
  }

  onEditPlayer() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onBack() {
    this.router.navigate(['players']);
    this.playersService.backToListMobileMode.next(false);
  }
}
