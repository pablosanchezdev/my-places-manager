import { Component, Input, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'place-card',
  templateUrl: 'place-card.html'
})
export class PlaceCardComponent implements OnInit {

  @Input() place;

  imageUrl: string;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.imageUrl = 'https://maps.googleapis.com/maps/api/place/photo?photoreference='
    + this.place.photos.photo_reference
    + '&key=AIzaSyDs1o9mW-vhqMcBocjTQkZdGi5I2EXmt5I';
  }

  goToDetail() {
    this.navCtrl.push('PlaceDetailPage');
  }

  test() {}
}
