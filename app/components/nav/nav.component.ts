import {Component} from '@angular/core';

import * as homeIcon from '!file-loader!svg-fill-loader?fill=#ffffff!../../../assets/images/inline-svg/home.svg';
import * as reportingIcon from '!file-loader!svg-fill-loader?fill=#ffffff!../../../assets/images/inline-svg/file-text.svg';
import * as adminIcon from '!file-loader!svg-fill-loader?fill=#ffffff!../../../assets/images/inline-svg/cog.svg';
import * as supportIcon from '!file-loader!svg-fill-loader?fill=#ffffff!../../../assets/images/inline-svg/question.svg';


import NavTemplate from './nav.html';

type NavLink = {
  iconSrc: any,
  route: String,
  label: String
};

@Component({
  template: NavTemplate,
  selector: 'primary-nav'
})
export class PrimaryNavComponent {
  links: NavLink[];

  constructor() {
    this.links = [
      {
        iconSrc: homeIcon,
        route: '/app/home/one',
        label: 'Home'
      }, {
        iconSrc: reportingIcon,
        route: '/app/reporting/one',
        label: 'Reporting'
      }, {
        iconSrc: adminIcon,
        route: '/app/admin/one',
        label: 'System Administration'
      }, {
        iconSrc: supportIcon,
        route: '/app/support',
        label: 'Support'
      }
    ];
  }
}

