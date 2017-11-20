import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-nearby-places-list',
  templateUrl: 'nearby-places-list.html',
})
export class NearbyPlacesListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  onItemClicked() {

  }
}
