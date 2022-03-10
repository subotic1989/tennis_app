import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWidgetComponent } from './weather-widget.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [WeatherWidgetComponent],
  imports: [CommonModule, MatIconModule, HttpClientModule],
  exports: [WeatherWidgetComponent],
})
export class WeatherWidgetModule {}
