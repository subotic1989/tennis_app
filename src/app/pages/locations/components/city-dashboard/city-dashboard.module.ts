import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityDashboardComponent } from './city-dashboard.component';
import { WeatherWidgetModule } from '../weather-widget/weather-widget.module';
import { GoogleMapsModule } from '../google-maps/google-maps.module';
import { TimerModule } from '@app/shared/components/timer/timer.module';

@NgModule({
  declarations: [CityDashboardComponent],
  imports: [CommonModule, WeatherWidgetModule, GoogleMapsModule, TimerModule],
  exports: [CityDashboardComponent],
})
export class CityDashboardModule {}
