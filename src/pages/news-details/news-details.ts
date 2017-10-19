import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-news-details',
  templateUrl: 'news-details.html',
})
export class NewsDetailsPage {

  news: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private iab: InAppBrowser,) {
    this.news = this.navParams.get('news');
    
  }

   appBrowser(url){
    const browser = this.iab.create (url, '_self', 'location=yes');
    browser.show();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailsPage');
  }

}
