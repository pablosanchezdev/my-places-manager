import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search-places-query-list',
  templateUrl: 'search-places-query-list.html',
})
export class SearchPlacesQueryListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPlacesQueryListPage');
  }

}
