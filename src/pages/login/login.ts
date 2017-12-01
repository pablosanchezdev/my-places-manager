import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  LoadingController,
  Loading,
  AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';
import { Utils } from '../../utils/utils';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;

  passwordMinLength: number = 6;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder,
    public authData: AuthProvider, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.required,
        Validators.minLength(this.passwordMinLength)])]
    });
  }

  loginUser() {
    this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
    .then(authData => {
      loading.dismiss()
      .then(() => {
        this.navCtrl.setRoot('MenuPage');
      })
    }, error => {
      loading.dismiss()
      .then(() => {
        Utils.showErrorAlert(this.alertCtrl, error.message);
      });
    });

    let loading: Loading = Utils.showLoading(this.loadingCtrl, 'Autenticando usuario...');
  }
}
