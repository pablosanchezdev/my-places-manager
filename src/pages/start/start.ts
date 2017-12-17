import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController) { }

  login() {
    this.navCtrl.push('LoginPage');
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }
}
