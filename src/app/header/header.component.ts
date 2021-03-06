import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as state from '../state/app-state';
import * as AppImage from '!svg-sprite-loader!../../assets/images/svg/app-logo.svg';
import * as DefaultUserPicture from '!svg-sprite-loader!element.ui/modules/assets/icons/font-awesome/user-circle.svg';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userPicture = '';
  public appImage = AppImage;
  public userName = 'Example A. User';
  public defaultPicture = DefaultUserPicture;
  public currentRoute$: Observable<any>;
  public currentUser$: Observable<any>;

  constructor(private store: Store<state.AppState>) {
    this.currentRoute$ = this.store.select(state.getRoute);
  }

  ngOnInit() {
  }
}
