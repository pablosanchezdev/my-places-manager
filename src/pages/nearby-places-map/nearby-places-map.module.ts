import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearbyPlacesMapPage } from './nearby-places-map';

@NgModule({
  declarations: [
    NearbyPlacesMapPage,
  ],
  imports: [
    IonicPageModule.forChild(NearbyPlacesMapPage),
  ],
})
export class NearbyPlacesMapPageModule {}
