import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPlacesListPage } from './search-places-list';

@NgModule({
  declarations: [
    SearchPlacesListPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPlacesListPage),
  ],
})
export class SearchPlacesListPageModule {}
