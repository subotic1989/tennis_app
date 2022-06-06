import { Component, OnInit } from '@angular/core';
import { PlayerRankInterface } from './models/player-rank.interface';

@Component({
  selector: 'app-table-game',
  templateUrl: './table-game.component.html',
  styleUrls: ['./table-game.component.scss'],
})
export class TableGameComponent implements OnInit {
  constructor() {}

  players: PlayerRankInterface[] = [
    { name: 'Tomica Ples', points: 100 },
    { name: 'Dejan Subotic', points: 110 },
    { name: 'Ivan Pandza', points: 90 },
    { name: 'Stjepan Popek', points: 80 },
    { name: 'Nikola Mudric', points: 70 },
    { name: 'Zvonimir Perica', points: 60 },
    { name: 'Ilija Kotarac', points: 50 },
    { name: 'Robert Pandza', points: 10 },
    { name: 'Stanko Mario Popek', points: 40 },
    { name: 'Ante Ivanko', points: 30 },
    { name: 'Dino Kardum', points: 20 },
  ];

  ngOnInit(): void {
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

  fillRankList() {}
}
