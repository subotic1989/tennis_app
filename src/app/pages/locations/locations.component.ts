import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  isLoading: boolean = true;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => (this.isLoading = false), 500);
  }
}
