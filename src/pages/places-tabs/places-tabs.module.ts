import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacesTabsPage } from './places-tabs';

@NgModule({
  declarations: [
    PlacesTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlacesTabsPage),
  ],
})
export class PlacesTabsModule {}