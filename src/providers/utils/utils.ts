import { Injectable } from '@angular/core';
import { AlertController, Loading, LoadingController, ToastController } from 'ionic-angular';

@Injectable()
export class UtilsProvider {

  constructor(private alertCtrl: AlertController, private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) { }
  
  showAlert(msg: string, isSuccess: boolean) {
    this.alertCtrl.create({
      title: isSuccess ? 'Éxito': 'Error',
      subTitle: msg,
      buttons: ['Ok']
    }).present();
  }

  showLoading(msg: string): Loading {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: msg
    });

    loading.present();
    return loading;
  }

  showToast(msg: string) {
    this.toastCtrl.create({
      message: msg,
      closeButtonText: 'Ok',
      showCloseButton: true
    }).present();
  }
}
