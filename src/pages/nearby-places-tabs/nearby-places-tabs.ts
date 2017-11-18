import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-nearby-places-tabs',
  templateUrl: 'nearby-places-tabs.html',
})
export class NearbyPlacesTabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NearbyPlacesTabsPage');
  }

}
