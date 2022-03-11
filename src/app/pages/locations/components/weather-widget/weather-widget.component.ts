import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { map } from 'rxjs';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit {
  @Input() cityQuery: string;
  WeatherData: any;
  iconWeather: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.WeatherData = {
      main: {},
      isDay: false,
    };
    this.getWeatherData();
  }

  getWeatherData() {
    const apiKey = environment.API_KEY_WEATHER;
    const url = environment.openWeatherUrl;

    this.http
      .get(`${url}${this.cityQuery}&appid=${apiKey}`)
      .pipe(
        map((data) => {
          this.iconWeather = `http://openweathermap.org/img/wn/${data['weather'][0].icon}@2x.png`;
          this.setWeatherData(data);
          console.log(data);
        })
      )
      .subscribe();
  }

  setWeatherData(data) {
    this.WeatherData = data;

    let sunsetTime = new Date(this.WeatherData.sys?.sunset * 1000);

    this.WeatherData.sunset_time = sunsetTime?.toLocaleTimeString();

    let currentDate = new Date();

    this.WeatherData.isDay = currentDate.getTime() < sunsetTime.getTime();

    this.WeatherData.temp_celcius = (
      this.WeatherData.main?.temp - 273.15
    ).toFixed(0);

    this.WeatherData.temp_min = (
      this.WeatherData.main?.temp_min - 273.15
    ).toFixed(0);

    this.WeatherData.temp_max = (
      this.WeatherData.main?.temp_max - 273.15
    ).toFixed(0);

    this.WeatherData.temp_feels_like = (
      this.WeatherData.main?.feels_like - 273.15
    ).toFixed(0);
  }
}
