import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-sidenav',
  templateUrl: './player-sidenav.component.html',
  styleUrls: ['./player-sidenav.component.scss'],
})
export class PlayerSidenavComponent implements OnInit {
  @Input() playerName: string;
  @Input() playerImage: string;
  @Input() active: boolean;

  constructor() {}

  ngOnInit(): void {}
}
