import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase/app';

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

  getUid(): Observable<firebase.User> {
    return this.afAuth.authState;
  }
}
