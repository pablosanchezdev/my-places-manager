import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { EmailValidator } from '../../validators/email';
import { UtilsProvider } from '../../providers/utils/utils';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  registerForm: FormGroup;

  passwordMinLength: number = 6;
  bioMaxLength: number = 25;

  constructor(public formBuilder: FormBuilder, private authData: AuthProvider,
    private userData: UserDataProvider, private utils: UtilsProvider) { }

  ionViewDidLoad() {
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
      loading.dismiss()
      .then(() => {
        this.userData.createUser(authData.uid, authData.email,
          this.registerForm.value.bio, this.registerForm.value.username);
      });
    }, error => {
      loading.dismiss()
      .then(() => {
        this.utils.showAlert(error.message, false);
      });
    });

    let loading = this.utils.showLoading('Registrando usuario...');
  }
}
