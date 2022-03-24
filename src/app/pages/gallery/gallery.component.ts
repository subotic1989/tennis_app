import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { select, Store } from '@ngrx/store';
import { isAdminSelector } from '../auth/store/auth.selectors';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  imageObject: Array<object> = [];
  isLoading: boolean = true;
  isAddPhotos: boolean;

  isAdmin$: Observable<boolean>;

  @ViewChild('nav') slider: NgImageSliderComponent;

  constructor(private afs: AngularFirestore, private store: Store) {}

  ngOnInit(): void {
    this.initValues();
    this.getGallery();
  }

  getGallery() {
    return this.afs
      .collection('gallery')
      .valueChanges({ idField: 'eventId' })
      .pipe(
        map((gallery) => {
          return gallery.forEach((img: any) => {
            this.imageObject.push({
              image: img.downloadURL,
              thumbImage: img.downloadURL,
              alt: img.eventId,
            });
            setTimeout(() => (this.isLoading = false), 500);
          });
        })
      )
      .subscribe();
  }

  initValues() {
    this.isAdmin$ = this.store.pipe(select(isAdminSelector));
  }

  addPhotos() {
    this.isAddPhotos = !this.isAddPhotos;
  }
}
