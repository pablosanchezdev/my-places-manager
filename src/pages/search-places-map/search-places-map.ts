import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search-places-map',
  templateUrl: 'search-places-map.html',
})
export class SearchPlacesMapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPlacesMapPage');
  }

}
