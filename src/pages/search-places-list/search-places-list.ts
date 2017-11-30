import { Component } from '@angular/core';
import { IonicPage, Loading, LoadingController } from 'ionic-angular';
import { PlacesDataProvider } from '../../providers/places-data/places-data';
import { Utils } from '../../utils/utils';

@IonicPage()
@Component({
  selector: 'page-search-places-list',
  templateUrl: 'search-places-list.html',
})
export class SearchPlacesListPage {

  textSearch: string;

  nextPageToken: string;
  places: object[];

  constructor(private provider: PlacesDataProvider, private loadingCtrl: LoadingController) { }

  onInput(input: string) {
    if (input) {
      let loading: Loading = Utils.showLoading(this.loadingCtrl, 'Buscando lugares...');
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
