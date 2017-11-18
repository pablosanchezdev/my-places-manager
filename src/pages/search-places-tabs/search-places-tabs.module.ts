import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPlacesTabsPage } from './search-places-tabs';

@NgModule({
  declarations: [
    SearchPlacesTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPlacesTabsPage),
  ],
})
export class SearchPlacesTabsPageModule {}
