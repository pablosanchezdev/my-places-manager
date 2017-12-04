import { Injectable } from '@angular/core';
import { AlertController, Loading, LoadingController } from 'ionic-angular';

@Injectable()
export class UtilsProvider {

  constructor(private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }
  
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
}
