import { Component, OnInit, OnDestroy } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit, OnDestroy {

  rootPage: string;
  authObserver: Subscription;

  constructor(public platform: Platform, public statusBar: StatusBar,
    public splashScreen: SplashScreen, public afAuth: AngularFireAuth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
    this.authObserver = this.afAuth.authState
    .subscribe(user => {
      if (user) {  // User is logged in
        this.rootPage = 'MenuPage';
      } else {
        this.rootPage = 'StartPage';
      }
    });
  }

  ngOnDestroy() {
    this.authObserver.unsubscribe();
  }
}
