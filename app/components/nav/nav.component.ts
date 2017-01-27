import {Component} from '@angular/core';

import homeIcon from '../../../assets/images/inline-svg/home.svg';
import reportingIcon from '../../../assets/images/inline-svg/file-text.svg';
import adminIcon from '../../../assets/images/inline-svg/cog.svg';
import supportIcon from '../../../assets/images/inline-svg/question.svg';
import patternsIcon from '../../../assets/images/inline-svg/pattern.svg';

import NavTemplate from './nav.html';

console.log(homeIcon);

type NavLink = {
  iconSrc: String,
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
        //stateRef: 'app.home.one',
        label: 'Home'
      }, {
        iconSrc: reportingIcon,
        //stateRef: 'app.reporting.one',
        label: 'Reporting'
      }, {
        iconSrc: adminIcon,
        //stateRef: 'app.admin.one',
        label: 'System Administration'
      }, {
        iconSrc: supportIcon,
        //stateRef: 'app.support',
        label: 'Support'
      }, {
        iconSrc: patternsIcon,
        //stateRef: 'app.patterns',
        label: 'Style'
      }
    ];
  }
}

