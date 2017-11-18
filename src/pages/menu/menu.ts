import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams } from 'ionic-angular';
import { PageInterface } from './menu';

export interface PageInterface {
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

  rootPage: any = 'NearbyPlacesTabsPage';

  pages: PageInterface[] = [
    { title: 'Sitios cercanos', component: 'NearbyPlacesTabsPage', icon: 'pin' },
    { title: 'Buscar sitios', component: 'SearchPlacesTabsPage', icon: 'compass' },
    { title: 'Mis listas', component: 'MyListsPage', icon: 'list' },
    { title: 'Acerca de', component: 'AboutPage', icon: 'information-circle' }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  openPage(page: PageInterface) {
    this.nav.setRoot(page.component);
  }
}
