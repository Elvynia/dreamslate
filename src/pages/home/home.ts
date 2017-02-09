import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DreamService } from '../../dream.service';
import {Dream} from "../../dream.interface";
import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  summary: string;
  description: string;
  tags: string;

  constructor(private dreamService:DreamService) {}

  ionViewDidLoad() {
    console.info('Loading Dream service.');
    this.dreamService.init();
  }

  public save() {
    // Create the new dream.
    let now = new Date();
    let dream:Dream = {
      archived: false,
      summary: this.summary,
      date: moment().format('YYYY-MM-DD')
    };
    if (this.description && this.description.length > 0) {
      dream.description = this.description;
    }
    if (this.tags && this.tags.length > 0) {
      dream.tags = this.tags;
    }
    // Call dream service to save it.
    this.dreamService.save(dream);
    this.summary = null;
    this.description = null;
    this.tags = null;
  }
}
