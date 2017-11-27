import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearbyPlacesSearchModalPage } from './nearby-places-search-modal';

@NgModule({
  declarations: [
    NearbyPlacesSearchModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NearbyPlacesSearchModalPage),
  ],
})
export class NearbyPlacesSearchModalPageModule {}
