import {Component} from '@angular/core';

import homeIcon from '../../../assets/images/inline-svg/home.svg';
import reportingIcon from '../../../assets/images/inline-svg/file-text.svg';
import adminIcon from '../../../assets/images/inline-svg/cog.svg';
import supportIcon from '../../../assets/images/inline-svg/question.svg';
import patternsIcon from '../../../assets/images/inline-svg/pattern.svg';

import NavTemplate from './nav.html';

type NavLink = {
  iconSrc: String,
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
      }, {
        iconSrc: patternsIcon,
        route: '/app/patterns',
        label: 'Style'
      }
    ];
  }
}

