import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthProvider {

  constructor(private afAuth: AngularFireAuth) { }

  loginUser(email: string, passwd: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, passwd);
  }

  logoutUser(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  signupUser(email: string, passwd: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, passwd);
  }
}
