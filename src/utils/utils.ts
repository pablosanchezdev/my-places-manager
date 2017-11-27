import { AlertController, LoadingController } from 'ionic-angular';
import { Loading } from 'ionic-angular/components/loading/loading';

export class Utils {

  constructor() { }

  static apiKey: string = 'AIzaSyDs1o9mW-vhqMcBocjTQkZdGi5I2EXmt5I';

  static showErrorAlert(alertCtrl: AlertController, errorMsg: string) {
    alertCtrl.create({
      title: 'Error',
      subTitle: errorMsg,
      buttons: ['OK']
    }).present();
  }

  static showLoading(loadingCtrl: LoadingController, msg: string): Loading {
    let loading = loadingCtrl.create({
      spinner: 'dots',
      content: msg
    });

    loading.present();
    return loading;
  }
}