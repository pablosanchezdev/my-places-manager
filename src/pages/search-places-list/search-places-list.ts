import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search-places-list',
  templateUrl: 'search-places-list.html',
})
export class SearchPlacesListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPlacesListPage');
  }

}
