import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, getFirestore, updateDoc, getDoc } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class GetPlayersService {
  db = getFirestore();

  constructor(private afs: AngularFirestore) {}

  getPlayers() {
    return this.afs
      .collection('players', (ref) => ref.orderBy('name'))
      .valueChanges({ idField: 'eventId' });
  }

  getPlayer(playerId: string) {
    const test = this.afs
      .collection('players')
      .doc(playerId)
      .valueChanges({ idField: 'eventId' });
    return test;
  }

  editPlayer(id: string, user: any) {
    const docRef = doc(this.db, 'players', id);
    return updateDoc(docRef, user);
  }
}
