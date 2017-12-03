import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading,
  LoadingController, AlertController } from 'ionic-angular';
import { PlacesDataProvider } from '../../providers/places-data/places-data';
import { CallNumber } from '@ionic-native/call-number';
import { Place } from '../../interfaces/place';
import { Utils } from '../../utils/utils';
import { UserDataProvider } from '../../providers/user-data/user-data';

@IonicPage()
@Component({
  selector: 'page-place-detail',
  templateUrl: 'place-detail.html',
})
export class PlaceDetailPage {

  place: Place;
  imageUrl: string;

  constructor(private navCtrl: NavController, private navParams: NavParams,
    private loadingCtrl: LoadingController, private placesProvider: PlacesDataProvider,
    private callNumber: CallNumber, private alertCtrl: AlertController,
    private userData: UserDataProvider) { }

  ionViewDidLoad() {
    let placeId = this.navParams.get('placeId');
    this.getPlaceInfo(placeId);
  }

  getPlaceInfo(placeId: string) {
    let loading: Loading = Utils.showLoading(this.loadingCtrl, 'Cargando datos...');
    this.placesProvider.getPlaceDetails(placeId)
    .subscribe(data => {
      loading.dismiss();
      this.place = data.result;
      this.loadPlaceImage();
    });
  }

  loadPlaceImage() {
    if (this.place.photos) {
      this.imageUrl = 'https://maps.googleapis.com/maps/api/place/photo?photoreference='
      + this.place.photos[0].photo_reference
      + '&maxheight=200'
      + '&key=' + Utils.apiKey;
    } else {
      this.imageUrl = 'http://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg';
    }
  }

  onImageClicked() {
    this.navCtrl.push('PlacePhotosPage', {
      name: this.place.name,
      photoRefs: this.place.photos
    });
  }

  launchDialer(phone: string) {
    this.callNumber.callNumber(phone, true)
    .catch(() => Utils.showErrorAlert(this.alertCtrl, 'Error al llamar'));
  }

  onLinkClicked(url: string) {
    window.open(url, '_system');
  }

  savePlace(id: string, name: string, address: string, imageUrl: string) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lista');

    this.userData.getUserLists().subscribe(lists => {
      if (alert != null) {
        lists.forEach(list => {
          alert.addInput({
            type: 'radio',
            label: list['payload'].val().name,
            value: list['payload']['key']
          });
        });
        alert.present();
      }
    });
    
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        alert = null;
        this.userData.addPlaceToList(data, id, name, address, imageUrl)
        .then(() => {
          Utils.showErrorAlert(this.alertCtrl, 'Añadido correctamente');
        });
      }
    });
  }
}
