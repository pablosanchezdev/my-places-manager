import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'place-card',
  templateUrl: 'place-card.html'
})
export class PlaceCardComponent {

  constructor(public navCtrl: NavController) { }

  goToDetail() {
    this.navCtrl.push('PlaceDetailPage');
  }

  test() {}
}
