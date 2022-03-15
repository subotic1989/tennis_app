import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { environment } from '../../../../../environments/environment';
import { map } from 'rxjs';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit {
  @Input() cityQuery: string;
  @ViewChild('test', { static: true }) test: ElementRef;

  private map: google.maps.Map;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getWeatherData();
  }

  getWeatherData() {
    const apiKey = environment.API_KEY_WEATHER;
    const url = environment.openWeatherUrl;

    this.http
      .get(`${url}${this.cityQuery}&appid=${apiKey}`)
      .pipe(
        map((data) => {
          const cords = { lng: +data['coord'].lon, lat: +data['coord'].lat };
          this.initMap(cords);
        })
      )
      .subscribe();
  }

  initMap(data) {
    let loader = new Loader({
      apiKey: environment.API_KEY_GOOGLE,
    });

    loader.load().then(() => {
      this.map = new google.maps.Map(this.test.nativeElement, {
        center: data,
        zoom: 6,
      });

      new google.maps.Marker({
        position: data,
        map: this.map,
      });
    });
  }
}
