import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface PlacesResponse {
  next_page_token: string,
  results: object[]
}

@Injectable()
export class PlacesDataProvider {

  constructor(public http: HttpClient) { }

  getNearbyPlaces(lat: number, lng: number, token?: string) {
    let request = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
      + 'location=' + lat + ',' + lng
      + '&radius=5000';

    if (token) {
      request += '&pagetoken=' + token;
    } 

    return this.http.get<PlacesResponse>(request);
  }
}
