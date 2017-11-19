import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPlacesQueryListPage } from './search-places-query-list';

@NgModule({
  declarations: [
    SearchPlacesQueryListPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPlacesQueryListPage),
  ],
})
export class SearchPlacesQueryListPageModule {}
