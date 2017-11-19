import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

export interface TabInterface {
  root: string,
  name: string,
  icon: string
}

@Component({
  selector: 'page-nearby-places-tabs',
  templateUrl: 'nearby-places-tabs.html',
})
export class NearbyPlacesTabsPage {

  tabs: TabInterface[] = [
    { root: 'NearbyPlacesListPage', name: 'Listado', icon: 'list-box' },
    { root: 'NearbyPlacesMapPage', name: 'Mapa', icon: 'map' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }
}
