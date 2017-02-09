import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Dream } from '../../dream.interface';
import { DreamService } from '../../dream.service';
import { DetailsPage } from "./details/details";


@Component({
  selector: 'page-book',
  templateUrl: 'book.html'
})
export class BookPage {
  detailsPage = DetailsPage;
  dreams: Array<Dream>;
  loading: boolean;
  error: boolean;

  constructor(private navCtrl: NavController, private dreamService:DreamService) {
    this.dreams = null;
    this.loading = false;
  }

  ionViewDidLoad() {
    this.dreamService.subscribe((data:Array<Dream>) => {
      if (data) {
        if (data instanceof Array) {
          console.info('Diary loaded.');
          this.dreams = data;
          this.loading = false;
        } else if (this.dreams) {
          console.info('Dream added to diary');
          let diary = this.dreams.slice();
          diary.push(data);
          this.dreams = diary;
        }
        this.error = false;
      } else {
        this.error = true;
        this.loading = false;
      }
    });
    this.refresh();
  }

  private removeFromCache(id: number) {
    let index = this.dreams.findIndex((dream:Dream) => { return id === dream.id });
    if (index >= 0) {
      this.dreams.splice(index, 1);
    }
  }

  public archive(dream: Dream) {
    dream.archived = true;
    this.dreamService.update(dream);
    this.removeFromCache(dream.id);
    console.info('Archived a dream.');
  }

  public delete(dream: Dream) {
    this.dreamService.delete(dream.id);
    this.removeFromCache(dream.id);
    console.info('Deleted a dream.');
  }

  public refresh() {
    console.info('Loading diary...');
    this.loading = true;
    this.dreamService.fetch();
  }

  public pushDetails(dream: Dream) {
    this.navCtrl.push(this.detailsPage, {
      dream: dream
    });
  }
}
