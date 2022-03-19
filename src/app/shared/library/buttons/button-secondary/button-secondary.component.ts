import { Component, Input, OnInit } from '@angular/core';

export type ButtonType = 'button' | 'submit';

@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
  styleUrls: ['./button-secondary.component.scss'],
})
export class ButtonSecondaryComponent implements OnInit {
  @Input() type: ButtonType;

  constructor() {
    this.type = 'submit';
  }

  ngOnInit(): void {}
}
