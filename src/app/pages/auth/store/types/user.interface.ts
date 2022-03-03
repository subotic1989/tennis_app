//  import firebase from "firebase/app";

import { FieldValue } from 'firebase/firestore';

export interface UserInterface {
  uid: string;
  name: string;
  photoURL: string;
  email: string;
  country: string;
  about?: string;
  roleId: string;
  role: Employee | Recruiter;
  created: FieldValue;
  updated?: FieldValue;
}

export interface Employee {
  specialization: Specialization;
  skills: Skill[];
  qualification: Qualification;
  expectedSalary: number;
  experiences: Experience[];
}

interface Specialization {
  id: string;
  name: string;
}

interface Skill {
  id: string;
  name: string;
}

interface Qualification {
  id: string;
  name: string;
}

interface Experience {
  companyName: string;
  period: Period;
}

interface Period {
  from: number;
  to: number;
}

export interface Recruiter {
  companyName: string;
  employeesCount: number;
}

// export interface UserInterface {
//   uid: string;
//   name: string;
//   photoURL: string;
//   email: string;
//   country: string;
//   roleId: string;
//   created: FieldValue;
//   updated?: FieldValue;
// }
