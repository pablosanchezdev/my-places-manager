import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { NearbyPlacesTabsPage } from '../pages/nearby-places-tabs/nearby-places-tabs';
import { SearchPlacesTabsPage } from '../pages/search-places-tabs/search-places-tabs';

@NgModule({
  declarations: [
    MyApp,
    NearbyPlacesTabsPage,
    SearchPlacesTabsPage
  ],
  imports: [
  BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NearbyPlacesTabsPage,
    SearchPlacesTabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
