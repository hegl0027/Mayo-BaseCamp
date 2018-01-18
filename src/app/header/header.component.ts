import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

//ngrx state
import * as state from '../common/app-state'

import * as DefaultUserPicture from '!svg-sprite-loader!mayo-ui-kit/assets/icons/font-awesome/user-circle.svg';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userPicture = '';
  public userName = 'Example User';
  public defaultPicture = DefaultUserPicture;
  public currentRoute$: Observable<any>;

  constructor(private store: Store<state.AppState>) {
    this.currentRoute$ = this.store.select(state.getRoute);
  }

  ngOnInit() {
  }

}
