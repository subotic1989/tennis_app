import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class LocationService {
  constructor(private http: HttpClient) {}

  locationService(request: any) {
    const url = 'environment.apiUrl';
    return this.http.post(url + '/users/login', request);
  }

  getWetter(cityQuery: string) {
    const apiKey = environment.API_KEY_WEATHER;
    const url = environment.openWeatherUrl;
    this.http.get(`${url}${cityQuery}&appid=${apiKey}`);
  }
}
