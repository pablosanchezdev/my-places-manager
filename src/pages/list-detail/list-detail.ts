import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { UserDataProvider } from '../../providers/user-data/user-data';

@IonicPage()
@Component({
  selector: 'page-list-detail',
  templateUrl: 'list-detail.html',
})
export class ListDetailPage {

  listId: string;
  name: string;
  places: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private userData: UserDataProvider) {
    this.listId = this.navParams.get('id');
    this.name = navParams.get('name');
  }

  ionViewDidLoad() {
    this.places = this.userData.getList(this.listId);
  }

  getPlaceDetails(placeId: string) {
    this.navCtrl.push('PlaceDetailPage', { placeId: placeId });
  }

  deletePlaceFromList(slidingItem: ItemSliding, listId: string, placeId: string) {
    slidingItem.close();
    this.userData.deletePlaceFromList(listId, placeId);
  }
}
