import { Component, Input, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'place-card',
  templateUrl: 'place-card.html'
})
export class PlaceCardComponent implements OnInit {

  @Input() place;

  imageUrl: string;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    // Download first image of place
    if (this.place.photos) {
      this.imageUrl = 'https://maps.googleapis.com/maps/api/place/photo?photoreference='
      + this.place.photos[0].photo_reference
      + '&maxheight=200'
      + '&key=' + Utils.apiKey;
    } else {
      this.imageUrl = 'http://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg';
    }
  }

  onPlaceClicked(id: string) {
    this.navCtrl.push('PlaceDetailPage', {
      placeId: id
    });
  }
}
