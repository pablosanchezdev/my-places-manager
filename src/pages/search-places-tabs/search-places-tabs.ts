import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search-places-tabs',
  templateUrl: 'search-places-tabs.html',
})
export class SearchPlacesTabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPlacesTabsPage');
  }

}
