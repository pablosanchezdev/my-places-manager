import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-place-detail',
  templateUrl: 'place-detail.html',
})
export class PlaceDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  onImageClicked() {
    this.navCtrl.push('PlacePhotosPage');
  }
}
