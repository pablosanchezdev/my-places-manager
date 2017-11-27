import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PlacesDataProvider {

  constructor(public http: HttpClient) { }

  getNearbyPlaces(lat: number, lng: number) {
    return this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
      + 'location=' + lat + ',' + lng
      + '&radius=5000');
  }
}
