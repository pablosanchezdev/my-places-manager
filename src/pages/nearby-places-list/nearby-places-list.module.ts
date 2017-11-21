import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { NearbyPlacesListPage } from './nearby-places-list';
import { PlaceCardSharedModule } from './../place-card-shared.module';

@NgModule({
  declarations: [
    NearbyPlacesListPage,
  ],
  imports: [
    IonicPageModule.forChild(NearbyPlacesListPage),
    PlaceCardSharedModule,
  ],
})
export class NearbyPlacesListPageModule {}
