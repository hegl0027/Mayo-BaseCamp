import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
