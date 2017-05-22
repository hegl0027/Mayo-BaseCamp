import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import * as moment from 'moment';


import FooterTemplate from './footer.html';

@Component({
  template: FooterTemplate,
  selector: 'basecamp-footer'
})
export class FooterComponent {
  createTime: any;
  lastSaved: Observable<any> = Observable.interval(1000)
    .map(() => {
      return moment(this.createTime).fromNow();
    });

  constructor() { 
    this.createTime = moment();
  }
}
