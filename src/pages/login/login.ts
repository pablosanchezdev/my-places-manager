import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';
import { UtilsProvider } from '../../providers/utils/utils';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;

  passwordMinLength: number = 6;  // Firebase passwords need at least 6 characters

  constructor(public formBuilder: FormBuilder, public authData: AuthProvider,
    private utils: UtilsProvider) {
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
      loading.dismiss();
    }, error => {
      loading.dismiss()
      .then(() => {
        this.utils.showAlert(error.message, false);
      });
    });

    let loading = this.utils.showLoading('Autenticando usuario...');
  }
}
