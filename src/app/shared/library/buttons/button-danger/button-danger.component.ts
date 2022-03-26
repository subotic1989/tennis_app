import { Component, OnInit, Input } from '@angular/core';

export type ButtonType = 'button' | 'submit';

@Component({
  selector: 'app-button-danger',
  templateUrl: './button-danger.component.html',
  styleUrls: ['./button-danger.component.scss'],
})
export class ButtonDangerComponent implements OnInit {
  @Input() type: ButtonType;

  constructor() {
    this.type = 'submit';
  }

  ngOnInit(): void {}
}
