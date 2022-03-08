import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({ providedIn: 'root' })
export class GetPlayersService {
  constructor(private afs: AngularFirestore) {}

  getPlayers() {
    return this.afs.collection('players').valueChanges();
  }

  getPlayer(query: string) {
    this.afs.doc;
    return this.afs
      .collection('players', (ref) => ref.where('name', '==', query))
      .valueChanges();
  }
}
