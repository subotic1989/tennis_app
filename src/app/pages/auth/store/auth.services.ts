import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private afAuth: Auth) {}

  registerUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.afAuth, email, password);
  }

  loginUser(email: string, password: string) {
    return signInWithEmailAndPassword(this.afAuth, email, password);
  }

  signOutUser() {
    return this.afAuth.signOut();
  }
}
