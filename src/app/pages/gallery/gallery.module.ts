import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [GalleryComponent],
  imports: [CommonModule, GalleryRoutingModule, NgImageSliderModule],
})
export class GalleryModule {}
