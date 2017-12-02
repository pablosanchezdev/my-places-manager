import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from '../../providers/auth/auth';
import { UserDataProvider } from '../../providers/user-data/user-data';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user: Observable<any>;

  constructor(public navCtrl: NavController, public authData: AuthProvider,
    public userData: UserDataProvider) { }

  ionViewDidLoad() {
    this.user = this.userData.getUserData();
  }

  launchCamera() {

  }

  launchGallery() {
    
  }

  goToLists() {
    this.navCtrl.setRoot('MyListsPage');
  }

  logoutUser() {
    this.authData.logoutUser();
  }
}
