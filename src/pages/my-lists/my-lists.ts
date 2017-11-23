import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemSliding } from 'ionic-angular/components/item/item-sliding';

@IonicPage()
@Component({
  selector: 'page-my-lists',
  templateUrl: 'my-lists.html',
})
export class MyListsPage {

  lists: object[];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

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
}
