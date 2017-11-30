import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Utils } from '../../utils/utils';

interface PhotoRef {
  photo_reference: string;
}

@IonicPage()
@Component({
  selector: 'page-place-photos',
  templateUrl: 'place-photos.html',
})
export class PlacePhotosPage {

  name: string;
  imageUrls: string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewWillEnter() {
    this.name = this.navParams.get('name');
    let photoRefs = this.navParams.get('photoRefs');
    this.getPhotos(photoRefs);
  }

  getPhotos(photoRefs: PhotoRef[]) {
    photoRefs.forEach(photoRef => {
      this.imageUrls.push('https://maps.googleapis.com/maps/api/place/photo?photoreference='
      + photoRef.photo_reference
      + '&maxheight=200'
      + '&key=' + Utils.apiKey);
    });
  }
}
