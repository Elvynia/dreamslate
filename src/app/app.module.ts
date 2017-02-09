import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BackandService } from '@backand/angular2-sdk';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BookPage } from '../pages/book/book';
import { DetailsPage } from "../pages/book/details/details";
import { SearchPage } from '../pages/search/search';
import { AutoresizeDirective } from '../directives/autoresize';
import { DreamService } from '../dream.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    BookPage,
    DetailsPage,
    SearchPage,
    AutoresizeDirective
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    BookPage,
    DetailsPage,
    SearchPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, BackandService, DreamService]
})
export class AppModule {}
