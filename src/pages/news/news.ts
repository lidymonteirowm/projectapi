import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ApiProvider } from './../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  newsData: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public apiProvider: ApiProvider) {
    this.newsData = this.apiProvider.getNews();
  }

  openDetails(news){
    this.navCtrl.push('NewsDetailsPage', {news: news});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
