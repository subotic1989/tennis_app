import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-game',
  templateUrl: './table-game.component.html',
  styleUrls: ['./table-game.component.scss'],
})
export class TableGameComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const table = Array.from(document.querySelectorAll('table')).map((el) => {
      Array.from(el.querySelectorAll('td')).map((el) => {
        if (+el.innerText.split(':')[0] > +el.innerText.split(':')[1]) {
          el.style.backgroundColor = 'rgb(182, 255, 172)';
        } else if (+el.innerText.split(':')[0] < +el.innerText.split(':')[1]) {
          el.style.backgroundColor = 'rgb(255, 172, 172)';
        } else if (el.innerText == 'x') {
          el.style.backgroundColor = '#8dc63f';
          // el.style.color = '#fff';
        }
      });
    });
  }
}
