import { Component, OnInit } from '@angular/core';
import { LoadStarshipDataAction } from './state/starwars.actions';
import { Store } from '@ngrx/store';
import { StarShip } from './state/starwars.interfaces';
import { AppState } from '../../../state/app-state';
import { Observable } from 'rxjs/Observable';
import { getStarShips } from '../../../state/app.selectors';

@Component({
  selector: 'app-data-dependency-chain',
  templateUrl: './data-dependency-chain.component.html',
  styleUrls: ['./data-dependency-chain.component.scss']
})
export class DataDependencyChainComponent implements OnInit {

  starShips$: Observable<StarShip[]>;
  someCode = '$ src/app/delete-me/examples/data-dependency-chain';

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.starShips$ = this.store.select(getStarShips);
    this.store.dispatch(new LoadStarshipDataAction());

  }
}
