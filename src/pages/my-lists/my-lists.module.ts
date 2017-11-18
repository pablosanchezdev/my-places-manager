import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyListsPage } from './my-lists';

@NgModule({
  declarations: [
    MyListsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyListsPage),
  ],
})
export class MyListsPageModule {}
