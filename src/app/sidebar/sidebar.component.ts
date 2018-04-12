import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import '!svg-sprite-loader!element.ui/modules/assets/icons/material-design/desktop_windows.svg';
import '!svg-sprite-loader!element.ui/modules/assets/icons/material-design/lightbulb_outline.svg';
import '!svg-sprite-loader!element.ui/modules/assets/icons/material-design/dashboard2.svg';
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
  @ViewChild('hamburger') hamburger: ElementRef;

  constructor() {
  }

  ngOnInit() {
    if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) >= 768) {
      this.hamburger.nativeElement.checked = true;
    }
  }
}
