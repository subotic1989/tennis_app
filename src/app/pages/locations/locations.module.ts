import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './components/locations.component';
import { CityDashboardModule } from './components/city-dashboard/city-dashboard.module';
import { GoogleMapsModule } from './components/google-maps/google-maps.module';

@NgModule({
  declarations: [LocationsComponent],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    CityDashboardModule,
    GoogleMapsModule,
  ],
})
export class LocationsModule {}
