import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { PlacesDataProvider } from '../../providers/places-data/places-data';
import { UtilsProvider } from '../../providers/utils/utils';
import { Place } from '../../interfaces/place';

@IonicPage()
@Component({
  selector: 'page-search-places-list',
  templateUrl: 'search-places-list.html',
})
export class SearchPlacesListPage {

  textSearch: string;

  nextPageToken: string;
  places: Place[];

  constructor(private provider: PlacesDataProvider, private utils: UtilsProvider) { }

  onInput(input: string) {
    if (input) {
      let loading = this.utils.showLoading('Buscando lugares...');
      this.textSearch = input;
      this.provider.performTextSearch(encodeURIComponent(input))
      .subscribe(data => {
        loading.dismiss();
        this.nextPageToken = data.next_page_token;
        this.places = data.results;
      });
    } else {
      this.places = [];
    }
  }

  loadMorePlaces(infiniteScroll) {
    // Load more places if there are more available
    if (this.nextPageToken) {
      this.provider.performTextSearch(this.textSearch, this.nextPageToken)
      .subscribe(data => {
        this.nextPageToken = data.next_page_token;
        data.results.forEach(place => this.places.push(place));
        infiniteScroll.complete();
      });
    } else {
      infiniteScroll.complete();
    }
  }
}
