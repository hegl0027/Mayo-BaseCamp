import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as state from '../app-state';
import * as UserActions from '../common-store/user/user.action';
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
    this.currentUser$ = this.store.select(state.getUser);
  }

  ngOnInit() {
  }

  userLogin() {
    console.log("log in user");
    this.store.dispatch({ type: UserActions.SIGN_IN_USER });
  }

  userLogout() {
    this.store.dispatch({ type: UserActions.LOG_OUT_USER });
  }
}
