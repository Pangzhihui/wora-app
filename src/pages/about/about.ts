import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http }     from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

// import { parseString } from 'xml2js'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  // We proxied rssUrl to http://bbs.cloud.icybee.cn/rss/

  // for `ionic serve`
  // private readonly rssUrl = '/rss/board-Picture'

  // for `electron .`
  // private readonly rssUrl = 'http://bbs.cloud.icybee.cn/rss/board-Picture'

  films: Observable<any>;

  public posts: Object[] = []

  constructor(
    public http:    Http,
    public navCtrl: NavController,
  ) {

  }

  ngOnInit() {
    // this.initBuptBbsRss()

    this.films = this.http.get('http://api.douban.com/v2/movie/top250?start=1&count=10').map(res => res.json());
  }

  }