import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PlacesDataProvider } from '../providers/places-data/places-data';
import { KeyInterceptor } from '../interceptors/key-interceptor';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { CallNumber } from '@ionic-native/call-number';
import { Camera } from '@ionic-native/camera';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { UserDataProvider } from '../providers/user-data/user-data';

const firebaseConfig = {
  apiKey: 'AIzaSyDZ-iX0pxubpRsNHYg4ezx0K86L5rcsEqs',
  authDomain: 'my-places-manager.firebaseapp.com',
  databaseURL: 'https://my-places-manager.firebaseio.com',
  projectId: 'my-places-manager',
  storageBucket: 'my-places-manager.appspot.com',
  messagingSenderId: '969776854062'
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    GoogleMaps,
    CallNumber,
    Camera,
    PlacesDataProvider,
    { provide: HTTP_INTERCEPTORS, useClass: KeyInterceptor, multi: true },
    AuthProvider,
    AngularFireDatabase,
    UserDataProvider
  ],
})
export class AppModule {}
