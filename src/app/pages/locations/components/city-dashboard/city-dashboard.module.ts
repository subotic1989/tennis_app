import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityDashboardComponent } from './city-dashboard.component';
import { WeatherWidgetModule } from '../weather-widget/weather-widget.module';

@NgModule({
  declarations: [CityDashboardComponent],
  imports: [CommonModule, WeatherWidgetModule],
  exports: [CityDashboardComponent],
})
export class CityDashboardModule {}
