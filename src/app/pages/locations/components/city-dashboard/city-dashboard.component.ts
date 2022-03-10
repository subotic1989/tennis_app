import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-dashboard',
  templateUrl: './city-dashboard.component.html',
  styleUrls: ['./city-dashboard.component.scss'],
})
export class CityDashboardComponent implements OnInit {
  @Input() cityQuery: string;
  constructor() {}

  ngOnInit(): void {}
}
