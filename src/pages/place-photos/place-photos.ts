import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { PlacesDataProvider } from '../../providers/places-data/places-data';
import { DomSanitizer } from '@angular/platform-browser';

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
  imageUrls: any[] = [];

  constructor(public navParams: NavParams, private placesData: PlacesDataProvider,
    private sanitizer: DomSanitizer) { }

  ionViewDidLoad() {
    this.name = this.navParams.get('name');
    let photoRefs = this.navParams.get('photoRefs');
    this.getPhotos(photoRefs);
  }

  getPhotos(photoRefs: PhotoRef[]) {
    photoRefs.forEach(photoRef => {
      this.placesData.getPhoto(photoRef.photo_reference)
      .subscribe(data => 
        this.imageUrls.push(this.sanitize(URL.createObjectURL(data)))
      );
    });
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
