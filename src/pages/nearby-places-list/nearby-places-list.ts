import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AlertController, Loading, LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { PlacesDataProvider } from '../../providers/places-data/places-data';
import { FiltersData } from '../nearby-places-search-modal/nearby-places-search-modal';
import { Utils } from './../../utils/utils';

@IonicPage()
@Component({
  selector: 'page-nearby-places-list',
  templateUrl: 'nearby-places-list.html',
})
export class NearbyPlacesListPage {

  lat: number;
  lng: number;

  filters: FiltersData;

  nextPageToken: string;
  places: object[];

  loading: Loading;

  constructor(private geolocation: Geolocation, private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController, private placesProvider: PlacesDataProvider,
    public modalCtrl: ModalController) { }

  ionViewDidLoad() {
    if (!this.lat || !this.lng) {
      this.getUserPosition();
    }
  }

  getUserPosition() {
    this.loading = Utils.showLoading(this.loadingCtrl, 'Cargando lugares cercanos...');

    this.geolocation.getCurrentPosition()
    .then(data => {
      this.lat = data.coords.latitude;
      this.lng = data.coords.longitude;
      this.getPlaces();
    })
    .catch(err => {
      this.loading.dismiss();
      Utils.showErrorAlert(this.alertCtrl, 'Error al obtener la ubicación del usuario: ' + err.message);
    });
  }

  getPlaces() {
    if (this.filters) {
      this.loading = Utils.showLoading(this.loadingCtrl, 'Aplicando filtros...');
    }
    this.placesProvider.getNearbyPlaces(this.lat, this.lng, this.filters)
    .subscribe(data => {
      this.loading.dismiss();
      this.nextPageToken = data.next_page_token;
      this.places = data.results;
    });
  }

  loadMorePlaces(infiniteScroll) {
    // Load more places when there are more available
    if (this.nextPageToken) {
      this.placesProvider.getNearbyPlaces(this.lat, this.lng, this.filters, this.nextPageToken)
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
        this.filters = data;
        this.getPlaces();
      }
    });
    
    modal.present();
  }
}
