import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabInterface } from '../nearby-places-tabs/nearby-places-tabs';

@Component({
  selector: 'page-search-places-tabs',
  templateUrl: 'search-places-tabs.html',
})
export class SearchPlacesTabsPage {
  
  tabs: TabInterface[] = [
    { root: 'SearchPlacesListPage', name: 'Buscar lugar', icon: 'search' },
    { root: 'SearchPlacesQueryListPage', name: 'Consultar lugar', icon: 'flag' },
    { root: 'SearchPlacesMapPage', name: 'Mapa', icon: 'map' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPlacesTabsPage');
  }
}
