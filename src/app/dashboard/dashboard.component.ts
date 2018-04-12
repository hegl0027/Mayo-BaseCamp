import { Component, OnInit } from '@angular/core';
import '!svg-sprite-loader!element.ui/modules/assets/icons/material-design/swap_vertical_circle.svg';
import '!svg-sprite-loader!element.ui/modules/assets/icons/material-design/center_focus_strong.svg';
import '!svg-sprite-loader!element.ui/modules/assets/icons/material-design/palette.svg';
import '!svg-sprite-loader!element.ui/modules/assets/icons/font-awesome/file-code-o.svg';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
