//  import firebase from "firebase/app";

import { FieldValue } from 'firebase/firestore';

export interface UserInterface {
  uid: string;
  name: string;
  photoURL: string;
  email: string;
  country: string;
  roleId: string;
  created: FieldValue;
  updated?: FieldValue;
}
