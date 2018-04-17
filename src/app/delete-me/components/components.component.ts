import { Component, OnInit } from '@angular/core';

import '!svg-sprite-loader!element.ui/modules/assets/icons/material-design/grid_on.svg';
import '!svg-sprite-loader!element.ui/modules/assets/icons/material-design/crop_square.svg';
import '!svg-sprite-loader!element.ui/modules/assets/icons/font-awesome/calendar-o.svg';


@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
