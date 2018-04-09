import { Component, OnInit } from '@angular/core';

import * as DefaultUserPicture from '!svg-sprite-loader!element.ui/modules/assets/icons/font-awesome/user-circle.svg';
import * as SurgeonIcon from '!svg-sprite-loader!element.ui/modules/assets/icons/mayo/surgeon.svg';
import * as ClipboardIcon from '!svg-sprite-loader!element.ui/modules/assets/icons/mayo/clipboard.svg';
import * as ConditionIcon from '!svg-sprite-loader!element.ui/modules/assets/icons/mayo/preventitive-care.svg';
import '!svg-sprite-loader!element.ui/modules/assets/icons/material-design/desktop_windows.svg';
import '!svg-sprite-loader!element.ui/modules/assets/icons/font-awesome/fire.svg';
import '!svg-sprite-loader!element.ui/modules/assets/icons/font-awesome/th-large.svg';
import '!svg-sprite-loader!element.ui/modules/assets/icons/mayo/architecture.svg';
import '!svg-sprite-loader!../../assets/images/svg/app-logo.svg';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public patientPicture = DefaultUserPicture;
  public surgeonIcon = SurgeonIcon;
  public clipboardIcon = ClipboardIcon;
  public conditionIcon = ConditionIcon;

  constructor() { }

  ngOnInit() {
  }

}
