import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { BookPage } from '../book/book';
import { SearchPage } from '../search/search';

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  homePage = HomePage;
  bookPage = BookPage;
  searchPage = SearchPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

 /* ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }*/

}
