import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, FabContainer } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from '../../providers/auth/auth';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { Utils } from '../../utils/utils';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user: Observable<any>;

  constructor(public navCtrl: NavController, public authData: AuthProvider,private alert:AlertController,
    public userData: UserDataProvider, private camera: Camera) { }

  ionViewDidLoad() {
    this.user = this.userData.getUserData();
  }

  onFabClicked(fab: FabContainer, isCamera: boolean) {
    fab.close();

    let cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.PICTURE,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    };

    if (isCamera) {
      cameraOptions.saveToPhotoAlbum = true;
    } else {
      cameraOptions.sourceType = this.camera.PictureSourceType.SAVEDPHOTOALBUM;
    }

    this.camera.getPicture(cameraOptions)
    .then(imageData => {
      this.userData.uploadImage(null, imageData);
    }, err => Utils.showErrorAlert(this.alert, err)); 
  }

  goToLists() {
    this.navCtrl.setRoot('MyListsPage');
  }

  logoutUser() {
    this.authData.logoutUser();
  }
}
