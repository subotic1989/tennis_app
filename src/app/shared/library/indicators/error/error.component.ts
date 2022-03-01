import { Component, Input, OnInit } from '@angular/core';
import { errorOutputTransformFunction } from '@app/shared/utils/errorOutputTransform';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  @Input() isOpen: boolean = true;
  @Input() errorInput: any;

  errorMsg: string;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.errorMsg = errorOutputTransformFunction(this.errorInput.code);
  }

  closeWindow() {
    this.isOpen = false;
  }
}
