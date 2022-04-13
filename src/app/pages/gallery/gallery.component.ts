import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { select, Store } from '@ngrx/store';
import { isAdminSelector } from '../auth/store/auth.selectors';
import { galleryAction } from './store/gallery.actions';
import { getGallerySelector } from './store/gallery.selectors';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  isLoading: boolean = true;
  isAddPhotos: boolean;
  galleryArray: any[] = [];

  isAdmin$: Observable<boolean>;

  @ViewChild('nav') slider: NgImageSliderComponent;

  constructor(private afs: AngularFirestore, private store: Store) {
    this.store.dispatch(galleryAction());
  }

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.isAdmin$ = this.store.pipe(select(isAdminSelector));

    this.store
      .select(getGallerySelector)
      //.pipe
      //   map((gallery) => {
      //     gallery?.forEach((el) => {
      //       this.galleryArray.push({
      //         image: el.downloadURL,
      //         thumbImage: el.downloadURL,
      //         alt: el.originalName,
      //       });
      //     });
      //   })
      //()

      .subscribe((data: any[]) => {
        this.galleryArray = data.map((img) => ({
          image: img.downloadURL,
          thumbImage: img.downloadURL,
          alt: img.originalName,
        }));
        this.isLoading = false;
      });
  }

  addPhotos() {
    this.isAddPhotos = !this.isAddPhotos;
  }
}
