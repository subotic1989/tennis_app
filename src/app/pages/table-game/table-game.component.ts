import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  getPlayerAction,
  getPlayersAction,
} from '../players/store/players.actions';
import { getPlayersSelector } from '../players/store/players.selectors';
import { PlayerResponseInterface } from '../players/store/types/playerResponse.interface';

@Component({
  selector: 'app-table-game',
  templateUrl: './table-game.component.html',
  styleUrls: ['./table-game.component.scss'],
})
export class TableGameComponent implements OnInit {
  constructor(private store: Store) {}

  players: PlayerResponseInterface[] = [];

  ngOnInit(): void {
    this.store.dispatch(getPlayersAction());
    this.addColorToTable();
    this.fillRankList();
  }

  addColorToTable() {
    Array.from(document.querySelectorAll('table')).map((el) => {
      Array.from(el.querySelectorAll('td')).map((el) => {
        if (+el.innerHTML.split(':')[0] > +el.innerHTML.split(':')[1]) {
          el.style.backgroundColor = 'rgb(182, 255, 172)';
        } else if (+el.innerHTML.split(':')[0] < +el.innerHTML.split(':')[1]) {
          el.style.backgroundColor = 'rgb(255, 172, 172)';
        } else if (el.innerHTML == 'x') {
          el.style.backgroundColor = '#8dc63f';
        }
      });
    });
  }

  fillRankList() {
    this.store.pipe(select(getPlayersSelector)).subscribe((players) => {
      this.players = players;
    });
  }

  onGetPlayer(id) {
    console.log(id);
    this.store.dispatch(getPlayerAction({ request: id }));
  }
}
