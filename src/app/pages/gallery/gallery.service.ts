import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  pickedAlbum = new BehaviorSubject<string>('zg');
  constructor() {}
}
