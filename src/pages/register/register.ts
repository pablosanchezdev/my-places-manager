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
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  registerForm: FormGroup;
  loading: Loading;

  passwordMinLength: number = 6;
  bioMaxLength: number = 60;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder,
    public authData: AuthProvider, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
    this.initRegisterForm();
  }

  initRegisterForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required,
        Validators.pattern('[a-zA-Z0-9._-]+')])],
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.required,
        Validators.minLength(this.passwordMinLength)])],
      bio: ['', Validators.compose([Validators.required,
        Validators.maxLength(this.bioMaxLength)])]
    });
  }

  signupUser() {
    this.authData.signupUser(this.registerForm.value.email, this.registerForm.value.password)
    .then(authData => {
      this.loading.dismiss()
      .then(() => {
        this.navCtrl.setRoot('MenuPage');
      });
    }, error => {
      this.loading.dismiss()
      .then(() => {
        Utils.showErrorAlert(this.alertCtrl, error.message);
      })
    });

    this.loading = Utils.showLoading(this.loadingCtrl, 'Registrando usuario...');
  }
}
