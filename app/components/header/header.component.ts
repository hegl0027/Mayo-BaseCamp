import { Component, Inject } from '@angular/core';

import {USER_SERVICE, UserService, User} from '../../shared/user/UserService';

import template from "./header.html";
import * as styles from './main-header.component.scss';

styles._insertCss();


@Component({
  template,
  selector: 'main-header'
})
export class MainHeaderComponent {
  user: User;
  userService: UserService;

  constructor(@Inject(USER_SERVICE) userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() {
    this.userService.getCurrentUser()
      .toPromise()
      .then((u: User) => this.user = u)
      .catch((err : any) => console.log("ERROR", err));
  }
}

