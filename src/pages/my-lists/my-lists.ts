import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ItemSliding } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-my-lists',
  templateUrl: 'my-lists.html',
})
export class MyListsPage {

  lists: object[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController) { }

  ionViewDidLoad() {
    this.lists = [
      { name: 'Lista 1', description: 'Descripcion lista 1', numItems: 5 },
      { name: 'Lista 2', description: 'Descripcion lista 2', numItems: 1 },
      { name: 'Lista 3', description: 'Descripcion lista 3', numItems: 8 },
      { name: 'Lista 4', description: 'Descripcion lista 4', numItems: 13 }
    ];
  }

  delete(slidingItem: ItemSliding, list) {
    slidingItem.close();
    this.lists.splice(this.lists.indexOf(list), 1);
  }

  addList() {
    this.alertCtrl.create({
      title: 'Añadir lista',
      message: 'Introduce nombre y descripción de la nueva lista',
      inputs: [
        {
          name: 'name',
          placeholder: 'Nombre'
        },
        {
          name: 'description',
          placeholder: 'Descripción'
        }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Añadir',
          handler: data => {
            if (this.isValid(data.name, data.description)) {

            } else {
              return false;
            }
          }
        }
      ]
    }).present();
  }

  isValid(name: string, description: string) {
    return name && description;
  }
}
