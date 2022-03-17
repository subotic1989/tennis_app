import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({ providedIn: 'root' })
export class GetPlayersService {
  constructor(private afs: AngularFirestore) {}

  getPlayers() {
    return this.afs
      .collection('players', (ref) => ref.orderBy('name'))
      .valueChanges();
  }

  getPlayer(query: string) {
    return this.afs
      .collection('players', (ref) => ref.where('name', '==', query))
      .valueChanges();
  }
}
