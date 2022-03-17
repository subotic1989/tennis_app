import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  @ViewChild('test', { static: true }) test: ElementRef;
  @Input() time: string;

  constructor() {}

  ngOnInit(): void {
    let timer = setInterval(() => {
      let countDownDate = new Date(this.time).getTime();
      let now = new Date().getTime();
      let dist = countDownDate - now;
      let days = Math.floor(dist / (1000 * 60 * 60 * 24));
      let hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((dist % (1000 * 60)) / 1000);
      this.test.nativeElement.innerHTML =
        days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
      if (dist < 0) {
        clearInterval(timer);
        this.test.nativeElement.innerHTML = 'EXPIRED';
      }
    }, 1000);
  }
}
