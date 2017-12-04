import { Component } from '@angular/core';
import { IonicPage, Loading, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { FiltersData } from '../nearby-places-search-modal/nearby-places-search-modal';
import { PlacesDataProvider } from '../../providers/places-data/places-data';
import { UtilsProvider } from '../../providers/utils/utils';
import { Place } from '../../interfaces/place';

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
  places: Place[];

  loading: Loading;

  constructor(private geolocation: Geolocation, private placesProvider: PlacesDataProvider,
    public modalCtrl: ModalController, private utils: UtilsProvider) { }

  ionViewDidLoad() {
    if (!this.lat || !this.lng) {
      this.getUserPosition();
    }
  }

  getUserPosition() {
    this.loading = this.utils.showLoading('Cargando lugares cercanos...');

    this.geolocation.getCurrentPosition()
    .then(data => {
      this.lat = data.coords.latitude;
      this.lng = data.coords.longitude;
      this.getPlaces();
    }, err => {
      this.loading.dismiss();
      this.utils.showAlert(`Error al obtener la ubicación: ${err.message}`, false);
    });
  }

  getPlaces() {
    if (this.filters) {
      this.loading = this.utils.showLoading('Aplicando filtros...');
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
