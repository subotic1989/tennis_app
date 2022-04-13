import { EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

export type DialogPurpose = 'message' | 'action';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Input() isDialog = false;
  @Input() dialogPurpose: DialogPurpose;

  @Output() deleteItemEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();

  constructor() {
    this.dialogPurpose = 'action';
  }

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    if (this.dialogPurpose === 'message') {
      setTimeout(() => (this.isDialog = true), 2000);
    }
  }

  confirm(event: Event) {
    (document.getElementById('overlay') as HTMLElement).style.display = 'block';
    this.deleteItemEvent.emit(event);
  }

  cancel(event: any) {
    this.cancelEvent.emit(event);
  }
}
