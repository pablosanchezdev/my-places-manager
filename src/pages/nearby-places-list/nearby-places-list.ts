import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController, LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { PlacesDataProvider } from '../../providers/places-data/places-data';
import { Utils } from './../../utils/utils';

@IonicPage()
@Component({
  selector: 'page-nearby-places-list',
  templateUrl: 'nearby-places-list.html',
})
export class NearbyPlacesListPage {

  lat: number;
  lng: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private geolocation: Geolocation, private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController, private placesProvider: PlacesDataProvider,
    public modalCtrl: ModalController) { }

  ionViewDidLoad() {
    if (!this.lat || !this.lng) {
      this.getUserPosition();
    }
  }

  getUserPosition() {
    this.geolocation.getCurrentPosition()
    .then(data => {
      loading.dismiss();
      this.lat = data.coords.latitude;
      this.lng = data.coords.longitude;
    })
    .catch(err => {
      loading.dismiss();
      Utils.showErrorAlert(this.alertCtrl, 'Error al obtener la ubicación del usuario: ' + err);
    });
    
    let loading = Utils.showLoading(this.loadingCtrl, 'Cargando ubicación...');
  }

  presentSearchModal() {
    this.modalCtrl.create('NearbyPlacesSearchModalPage').present();
  }
}
