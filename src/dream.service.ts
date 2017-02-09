import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { BackandService } from '@backand/angular2-sdk';

import 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Dream } from './dream.interface';

@Injectable()
export class DreamService {
  appName:string = "dreamslate";
  tableName:string = "diary";
  token:string = "3f0f563d-cca2-4f6a-a6e8-b0c5454c85ed";
  private headers:Headers;
  private dreams: BehaviorSubject<Array<Dream>>;

  constructor(public http:Http, private backandService:BackandService) {
    this.headers = new Headers();
    this.dreams = new BehaviorSubject(new Array<Dream>());
  }

  public init() {
    this.backandService.init({
      appName: this.appName,
      anonymousToken: this.token
    });
  }

  public fetch(refresher?: any) {
    this.backandService.object.getList(this.tableName, {
      filter: {
        q: {
          archived: false
        }
      }
    })
      .then((res) => {
        this.dreams.next(res.data);
        if (refresher) {
          refresher.complete();
        }
      })
      .catch(err => {
        console.error('Fetch request failed : ' + err);
        this.dreams.next(null);
      });
  }

  public delete(id: number) {
    this.backandService.object.remove(this.tableName, id);
  }

  public save(dream: Dream) {
    this.backandService.object.create(this.tableName, dream)
      .then((res) => {
        this.dreams.next(res.data);
      })
      .catch(err => {
        console.error('Save request failed : ' + err);
      });
  }

  public update(dream: Dream) {
    this.backandService.object.update(this.tableName, dream.id, dream);
  }

  public subscribe(observer) {
    this.dreams.subscribe(observer);
  }
}
