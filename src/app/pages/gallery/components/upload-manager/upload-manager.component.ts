import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../gallery.service';

@Component({
  selector: 'upload-manager',
  templateUrl: './upload-manager.component.html',
  styleUrls: ['./upload-manager.component.scss'],
})
export class UploadManagerComponent implements OnInit {
  isHovering: boolean;
  files: File[] = [];

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  pickAlbum(album) {
    this.galleryService.pickedAlbum.next(album);
  }
}
