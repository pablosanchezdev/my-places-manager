import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearbyPlacesListPage } from './nearby-places-list';

@NgModule({
  declarations: [
    NearbyPlacesListPage,
  ],
  imports: [
    IonicPageModule.forChild(NearbyPlacesListPage),
  ],
})
export class NearbyPlacesListPageModule {}
