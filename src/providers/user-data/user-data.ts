import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import firebase from 'firebase';
import { AuthProvider } from '../auth/auth';

@Injectable()
export class UserDataProvider {

  uid: string;
  userRef: AngularFireObject<any>;
  userListsRef: AngularFireList<any>;
  listsRef: AngularFireList<any>;

  constructor(public db: AngularFireDatabase, public authData: AuthProvider,
    public http: HttpClient ) {
    this.authData.getUid()
    .subscribe(data => {
      this.uid = data.uid;
      this.userRef = db.object(`users/${this.uid}`);
      this.userListsRef = db.list(`user-lists/${this.uid}`);
      this.listsRef = db.list('lists');
    });
   }

  createUser(uid: string, email: string, bio: string, username: string) {
    // An avatar with the initial letter of the username is created
    this.getUserInitialAvatar(username)
    .subscribe(avatar => {
      this.uploadImage(avatar).then(url => {
        let updates = {};

        updates[`/users/${uid}`] = {
          email: email,
          bio: bio,
          username: username,
          profile_image: url
        };
    
        // Every new user has a favorites empty list by default
        let listId =  this.db.database.ref(`user-lists/${uid}`).push().key;
        updates[`/user-lists/${uid}/${listId}`] = {
          name: 'Favoritos',
          description: 'Mis lugares favoritos',
          numItems: 0
        };
       
        // Perform a multi-path update
        this.db.database.ref().update(updates);
      });
    });
  }

  getUserInitialAvatar(username: string): Observable<Blob> {
    return this.http.get(
      `https://ui-avatars.com/api/?name=${username}&size=120&background=d0d0d0&length=1`,
      { responseType: 'blob' }
    );
  }

  createList(name: string, description: string) {
    this.userListsRef.push({
      name: name,
      description: description,
      numItems: 0
    });
  }

  deleteList(listId: string) {
    this.userListsRef.remove(listId);
    this.listsRef.remove(listId);
  }

  addPlaceToList(listId: string, placeId: string, name: string,
    address: string, photoUrl: string): Promise<any> {
    return this.db.object(`lists/${listId}/${placeId}`).set({
      name: name,
      address: address,
      photoUrl: photoUrl
    })
    .then(() => {
      const listRef = this.db.database.ref(`user-lists/${this.uid}/${listId}`);
      return listRef.once('value', snap => {
        return listRef.update({ numItems: ++snap.val().numItems });
      });
    });
  }

  getUserLists(): Observable<any> {
    return this.userListsRef.snapshotChanges();
  }

  getUserData(): Observable<any> {
    return this.userRef.valueChanges();
  }

  uploadImage(data?: Blob, base64Data?: string): Promise<string> {
    let imageRef = firebase.storage().ref().child(`${this.uid}.jpg`);

    if (data) {
      return imageRef.put(data)
      .then(snap => {
        return snap.downloadURL;
      });
    } else {
      return imageRef.putString(base64Data, 'base64')
      .then(snap => {
        return snap.downloadURL;
      });
    }
  }
}
