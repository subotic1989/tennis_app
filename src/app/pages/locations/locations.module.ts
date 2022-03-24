import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { CityDashboardModule } from './components/city-dashboard/city-dashboard.module';
import { GoogleMapsModule } from './components/google-maps/google-maps.module';
import { LocationsComponent } from './locations.component';
import { TimerModule } from '@app/shared/components/timer/timer.module';
import { LoadingTennisModule } from '@app/shared/library/indicators/loading-tennis/loading-tennis.module';

@NgModule({
  declarations: [LocationsComponent],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    CityDashboardModule,
    GoogleMapsModule,
    TimerModule,
    LoadingTennisModule,
  ],
})
export class LocationsModule {}
