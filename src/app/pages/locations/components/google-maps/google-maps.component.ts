import { Component, Input, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit {
  @Input() cord: any;
  private map: google.maps.Map;

  constructor() {}

  ngOnInit(): void {
    this.initMap();
  }

  initMap() {
    let loader = new Loader({
      apiKey: environment.API_KEY_GOOGLE,
    });

    loader.load().then(() => {
      const location = { lat: this.cord.lat, lng: this.cord.lon };

      this.map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 6,
      });

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    });
  }
}
