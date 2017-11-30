import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FiltersData } from '../../pages/nearby-places-search-modal/nearby-places-search-modal';
import { Place } from '../../interfaces/place';

interface PlacesResponse {
  next_page_token: string,
  results: Place[]
}

@Injectable()
export class PlacesDataProvider {

  constructor(public http: HttpClient) { }

  getNearbyPlaces(lat: number, lng: number, filters?: FiltersData, token?: string) {
    let request = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
      + 'location=' + lat + ',' + lng
      + '&radius=5000';

    if (filters) {
      if (filters.keyword) {
        request += '&keyword=' + filters.keyword;
      }

      if (filters.type) {
        request += '&type=' + filters.type;
      }

      if (filters.sortByDistance) {
        request += '&rankby=distance';
      } else {
        request += '&radius=5000';
      }

      if (filters.language) {
        request += '&language=' + filters.language;
      }

      if (filters.openNow) {
        request += '&opennow';
      }
    }

    if (token) {
      request += '&pagetoken=' + token;
    } 

    return this.http.get<PlacesResponse>(request);
  }

  performTextSearch(textSearch: string, token?: string) {
    let request = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query='
      + textSearch;

    if (token) {
      request += '&pagetoken=' + token;
    }

    return this.http.get<PlacesResponse>(request);
  }
}
