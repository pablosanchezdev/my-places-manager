import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

interface TabInterface {
  root: string,
  title: string,
  icon: string
}

@IonicPage()
@Component({
  selector: 'page-places-tabs',
  templateUrl: 'places-tabs.html',
})
export class PlacesTabsPage {

  tabs: TabInterface[] = [
    { root: 'NearbyPlacesListPage', title: 'Listado', icon: 'compass' },
    { root: 'SearchPlacesListPage', title: 'Buscar', icon: 'search' },
    { root: 'NearbyPlacesMapPage', title: 'Mapa', icon: 'map' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }
}
