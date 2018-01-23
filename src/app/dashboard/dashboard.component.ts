import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

//ngrx state
import * as state from '../common/app-state'
//ngrx reducer
import { INCREMENT, DECREMENT, RESET } from '../common/counter';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<state.AppState>) {
    this.count$ = this.store.select(state.getCountValue);
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }
}
