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

  nextPageToken: string;
  places: object[];

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
      this.getPlaces();
    })
    .catch(err => {
      loading.dismiss();
      Utils.showErrorAlert(this.alertCtrl, 'Error al obtener la ubicación del usuario: ' + err);
    });
    
    let loading = Utils.showLoading(this.loadingCtrl, 'Cargando ubicación...');
  }

  getPlaces() {
    this.placesProvider.getNearbyPlaces(this.lat, this.lng)
    .subscribe(data => {
      this.nextPageToken = data.next_page_token;
      this.places = data.results;
    });
  }

  loadMorePlaces(infiniteScroll) {
    // Load more places when there are more available
    if (this.nextPageToken) {
      this.placesProvider.getNearbyPlaces(this.lat, this.lng, this.nextPageToken)
      .subscribe(data => {
        this.nextPageToken = data.next_page_token;
        data.results.forEach(place => this.places.push(place));
        infiniteScroll.complete();
      });
    } else {
      infiniteScroll.complete();
    }
  }

  presentSearchModal() {
    let modal = this.modalCtrl.create('NearbyPlacesSearchModalPage');
    
    modal.onDidDismiss(data => {
      if (data) {
        
      }
    });
    
    modal.present();
  }
}
