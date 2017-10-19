import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiProvider {

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  getNews(){
    return this.http.get('http://sistemafundaj.herokuapp.com/api/noticias/?format=json').map(res => res.json());
  }



}
