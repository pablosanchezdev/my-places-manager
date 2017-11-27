import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface PlacesResponse {
  next_page_token: string,
  results: object[]
}

@Injectable()
export class PlacesDataProvider {

  constructor(public http: HttpClient) { }

  getNearbyPlaces(lat: number, lng: number) {
    return this.http.get<PlacesResponse>('https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
      + 'location=' + lat + ',' + lng
      + '&radius=5000');
  }

  getNextNearbyPlaces(lat: number, lng: number, nextToken: string) {
    return this.http.get<PlacesResponse>('https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
      + 'location=' + lat + ',' + lng
      + '&radius=5000'
      + '&pagetoken=' + nextToken);
  }
}
