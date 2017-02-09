import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Dream} from "../../../dream.interface";

/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  dream: Dream;

  constructor(private navCtrl: NavController, private navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('Loading details.');
    this.dream = this.navParams.get('dream');
  }

}
