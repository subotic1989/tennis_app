import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsComponent } from './google-maps.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [GoogleMapsComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [GoogleMapsComponent],
})
export class GoogleMapsModule {}
