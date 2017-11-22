import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearbyPlacesTabsPage } from './nearby-places-tabs';

@NgModule({
  declarations: [
    NearbyPlacesTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(NearbyPlacesTabsPage),
  ],
})
export class NearbyPlacesTabsModule {}