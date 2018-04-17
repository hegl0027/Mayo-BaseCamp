import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { DecrementAction, IncrementAction, ResetCounterAction } from './state/';
import { AppState } from '../../../state/app-state';
import '!svg-sprite-loader!element.ui/modules/assets/icons/material-design/keyboard_arrow_left.svg';
import '!svg-sprite-loader!element.ui/modules/assets/icons/material-design/keyboard_arrow_right.svg';
import '!svg-sprite-loader!element.ui/modules/assets/icons/material-design/info2.svg';
import { getCurrentCount } from '../../../state/app.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count$: Observable<number>;
  someCode = '$ src/app/delete-me/examples/counter';
  delta = 1;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(getCurrentCount);
  }

  increment() {
    this.store.dispatch(new IncrementAction(this.delta));
  }

  decrement() {
    this.store.dispatch(new DecrementAction(this.delta));
  }

  reset() {
    this.store.dispatch(new ResetCounterAction());
  }

  getColorClass(count) {
    if (count) {
      return count > 0 ? 'greater-than-zero' : 'less-than-zero';
    }
  }
}
