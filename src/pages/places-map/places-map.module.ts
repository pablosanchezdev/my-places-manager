import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacesMapPage } from './places-map';

@NgModule({
  declarations: [
    PlacesMapPage,
  ],
  imports: [
    IonicPageModule.forChild(PlacesMapPage),
  ],
})
export class PlacesMapPageModule {}
