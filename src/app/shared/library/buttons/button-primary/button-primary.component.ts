import { Component, OnInit, Input } from '@angular/core';

export type ButtonType = 'button' | 'submit';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss'],
})
export class ButtonPrimaryComponent implements OnInit {
  @Input() type: ButtonType;

  constructor() {
    this.type = 'submit';
  }

  ngOnInit(): void {}
}
