import { Component, OnInit } from '@angular/core';

import * as DefaultUserPicture from '!svg-sprite-loader!mayo-ui-kit/assets/icons/font-awesome/user-circle.svg';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public patientPicture = DefaultUserPicture;

  constructor() { }

  ngOnInit() {
  }

}
