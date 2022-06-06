import { Component, OnInit, Input } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { GalleryService } from '../../gallery.service';

@Component({
  selector: 'upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss'],
})
export class UploadTaskComponent implements OnInit {
  @Input() file: File;
  task: AngularFireUploadTask; // this does the uploading for us

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private galleryService: GalleryService
  ) {}

  ngOnInit(): void {
    this.initValues();
    this.startUpload();
  }

  initValues() {
    this.galleryService.pickedAlbum.subscribe((data) => console.log(data));
  }

  startUpload() {
    let safeName = this.file.name.replace(/([^a-z0-9.]+)/gi, ''); // file name stripped of spaces and special chars
    let timestamp = Date.now(); // ex: '1598066351161'
    const uniqueSafeName = timestamp + '_' + safeName;
    // const path = 'zagreb_2021/' + uniqueSafeName; // Firebase storage path
    const path = 'graz_2022/' + uniqueSafeName; // Firebase storage path
    const ref = this.storage.ref(path); // reference to storage bucket

    this.task = this.storage.upload(path, this.file);
    this.percentage = this.task.percentageChanges(); // progress monitoring
    this.snapshot = this.task.snapshotChanges().pipe(
      // emits a snapshot of the transfer progress every few hundred milliseconds

      finalize(async () => {
        // after the observable completes, get the file's download URL
        this.downloadURL = await ref.getDownloadURL().toPromise();

        this.db
          .collection('gallery')
          .doc(uniqueSafeName)
          .set({
            storagePath: path,
            downloadURL: this.downloadURL,
            originalName: this.file.name,
            timestamp: timestamp,
          })
          .then(function () {
            console.log('document written!');
          })
          .catch(function (error) {
            console.error('Error writing document:', error);
          });
      })
    );
  }

  isActive(snapshot) {
    return (
      snapshot.state === 'running' &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }
}
