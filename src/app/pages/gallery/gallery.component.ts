import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @ViewChild('nav') slider: NgImageSliderComponent;

  constructor() {}

  ngOnInit(): void {}

  imageObject: Array<object> = [
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tennis_Racket_and_Balls.jpg/220px-Tennis_Racket_and_Balls.jpg',
      thumbImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tennis_Racket_and_Balls.jpg/220px-Tennis_Racket_and_Balls.jpg',
      alt: 'alt of image',
      title: 'title of image',
    },
  ];

  prevImageClick() {
    this.slider.prev();
  }

  nextImageClick() {
    this.slider.next();
  }
}
