import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { } from '@types/googlemaps';

@IonicPage()
@Component({
  selector: 'page-nearby-places-map',
  templateUrl: 'nearby-places-map.html',
})
export class NearbyPlacesMapPage {

  @ViewChild('map') mapRef: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform : Platform) { }

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.initMap();
    });
  }
  
  initMap() {
    let uluru = {lat: 40.965001, lng: -5.663955};
    let map = new google.maps.Map(this.mapRef.nativeElement, {
      zoom: 13,
      center: uluru
    });
    new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
}
