import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonPrimaryModule } from '@app/shared/library/buttons/button-primary/button-primary.module';
import { ButtonSecondaryModule } from '@app/shared/library/buttons/button-secondary/button-secondary.module';
import { LoadingTennisModule } from '@app/shared/library/indicators/loading-tennis/loading-tennis.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgImageSliderModule } from 'ng-image-slider';
import { DropzoneDirective } from './components/directives/dropzone.directive';
import { HomeComponent } from './components/home/home.component';
import { UploadManagerComponent } from './components/upload-manager/upload-manager.component';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { GalleryEffect } from './store/gallery.effects';
import { reducerGallery } from './store/gallery.reducer';

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
    ButtonSecondaryModule,

    StoreModule.forFeature('gallery', reducerGallery),
    EffectsModule.forFeature([GalleryEffect]),
  ],
})
export class GalleryModule {}
