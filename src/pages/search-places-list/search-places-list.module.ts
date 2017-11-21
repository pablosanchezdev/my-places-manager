import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SearchPlacesListPage } from './search-places-list';
import { PlaceCardSharedModule } from './../place-card-shared.module';

@NgModule({
  declarations: [
    SearchPlacesListPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPlacesListPage),
    PlaceCardSharedModule,
  ],
})
export class SearchPlacesListPageModule {}
