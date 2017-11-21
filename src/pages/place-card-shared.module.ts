import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PlaceCardComponent } from '../components/place-card/place-card';

@NgModule({
  declarations: [
    PlaceCardComponent,
  ],
  imports: [
    IonicPageModule.forChild(PlaceCardComponent),
  ],
  exports: [
    PlaceCardComponent,
  ],
})
export class PlaceCardSharedModule {}
