import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPlacesMapPage } from './search-places-map';

@NgModule({
  declarations: [
    SearchPlacesMapPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPlacesMapPage),
  ],
})
export class SearchPlacesMapPageModule {}
