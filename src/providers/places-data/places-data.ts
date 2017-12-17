import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FiltersData } from '../../pages/nearby-places-search-modal/nearby-places-search-modal';
import { Place } from '../../interfaces/place';

interface PlacesResponse {
  next_page_token: string,
  results: Place[]
}

interface PlaceDetailsResponse {
  result: Place;
}

@Injectable()
export class PlacesDataProvider {

  constructor(public http: HttpClient) { }

  getNearbyPlaces(lat: number, lng: number, filters?: FiltersData, token?: string) {
    let request = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
      + `location=${lat},${lng}`;

    // Add filters data
    if (filters) {
      if (filters.keyword) {
        request += `&keyword=${filters.keyword}`;
      }

      if (filters.type) {
        request += `&type=${filters.type}`;
      }

      if (filters.sortByDistance) {
        request += '&rankby=distance';
      } else {
        request += `&radius=${filters.radius}`;
      }

      if (filters.language) {
        request += `&language=${filters.language}`;
      }

      if (filters.openNow) {
        request += '&opennow';
      }
    } else {
      request += '&radius=5000';  // Default radius is 5000 m
    }

    // Token is necessary to perform infinite scroll
    if (token) {
      request += `&pagetoken=${token}`;
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

  getPlaceDetails(id: string) {
    return this.http.get<PlaceDetailsResponse>(
      'https://maps.googleapis.com/maps/api/place/details/json?placeid='+id
    );
  }

  getPhoto(photoRef: string): Observable<Blob> {
    // Place images are returned as Blob files
    return this.http.get(
      `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoRef}
      &maxheight=200`,
      { responseType: 'blob' }
    );
  }
}
