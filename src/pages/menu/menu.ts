import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams } from 'ionic-angular';

interface PageInterface {
  title: string,
  component: string,
  icon: string
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'PlacesTabsPage';

  pages: PageInterface[] = [
    { title: 'Lugares', component: 'PlacesTabsPage', icon: 'pin' },
    { title: 'Mis listas', component: 'MyListsPage', icon: 'list' },
    { title: 'Mi perfil', component: 'ProfilePage', icon: 'contact' },
    { title: 'Acerca de', component: 'AboutPage', icon: 'information-circle' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  openPage(page: PageInterface) {
    this.nav.setRoot(page.component);
  }
}
