import { Component, Input, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacesDataProvider } from '../../providers/places-data/places-data';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'place-card',
  templateUrl: 'place-card.html'
})
export class PlaceCardComponent implements OnInit {

  @Input() place;

  imageUrl;

  constructor(public navCtrl: NavController, private placesData: PlacesDataProvider,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // Download first image of place
    if (this.place.photos) {
      this.placesData.getPhoto(this.place.photos[0].photo_reference)
      .subscribe(data => {
        this.imageUrl = this.sanitize(URL.createObjectURL(data));
      });
    } else {
      this.imageUrl = 'http://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg';
    }
  }

  onPlaceClicked(id: string) {
    this.navCtrl.push('PlaceDetailPage', {
      placeId: id
    });
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
