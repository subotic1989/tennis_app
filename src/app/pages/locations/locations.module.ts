import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { CityDashboardModule } from './components/city-dashboard/city-dashboard.module';
import { GoogleMapsModule } from './components/google-maps/google-maps.module';
import { LocationsComponent } from './locations.component';
import { TimerModule } from '@app/shared/components/timer/timer.module';

@NgModule({
  declarations: [LocationsComponent],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    CityDashboardModule,
    GoogleMapsModule,
    TimerModule,
  ],
})
export class LocationsModule {}
