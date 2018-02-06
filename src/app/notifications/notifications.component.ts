import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

//ngrx state
import * as state from '../app-state';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<state.AppState>) {
    this.count$ = this.store.select(state.getCountValue);
  }

  ngOnInit() {
  }

}
