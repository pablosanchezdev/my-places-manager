import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacePhotosPage } from './place-photos';

@NgModule({
  declarations: [
    PlacePhotosPage,
  ],
  imports: [
    IonicPageModule.forChild(PlacePhotosPage),
  ],
})
export class PlacePhotosPageModule {}
