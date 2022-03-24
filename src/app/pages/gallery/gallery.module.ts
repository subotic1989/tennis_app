import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { HomeComponent } from './components/home/home.component';
import { DropzoneDirective } from './components/directives/dropzone.directive';
import { UploadManagerComponent } from './components/upload-manager/upload-manager.component';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { LoadingTennisModule } from '@app/shared/library/indicators/loading-tennis/loading-tennis.module';
import { ButtonPrimaryModule } from '@app/shared/library/buttons/button-primary/button-primary.module';

@NgModule({
  declarations: [
    GalleryComponent,
    HomeComponent,
    UploadManagerComponent,
    UploadTaskComponent,
    DropzoneDirective,
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    NgImageSliderModule,
    LoadingTennisModule,
    ButtonPrimaryModule,
  ],
})
export class GalleryModule {}
