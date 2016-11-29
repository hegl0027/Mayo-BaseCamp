import homeIcon from '../../../assets/images/inline-svg/home.svg?fill=#fefefe';
import reportingIcon from '../../../assets/images/inline-svg/file-text.svg?fill=#fefefe';
import adminIcon from '../../../assets/images/inline-svg/cog.svg?fill=#fefefe';
import supportIcon from '../../../assets/images/inline-svg/question.svg?fill=#fefefe';
import patternsIcon from '../../../assets/images/inline-svg/pattern.svg?fill=#fefefe';

function matchState(s1, s2) {
  if (!s1 || !s2 || !s1[0] || !s2[0] || s1[0] !== s2[0])
    return 0;
  return 1 + matchState(s1.substring(1), s2.substring(1));
}


export default class NavController {
  constructor($state) {
    this.$state = $state;

    this.links = [
      {
        iconSrc: homeIcon,
        stateRef: 'app.home.one',
        label: 'Home'
      }, {
        iconSrc: reportingIcon,
        stateRef: 'app.reporting.one',
        label: 'Reporting'
      }, {
        iconSrc: adminIcon,
        stateRef: 'app.admin.one',
        label: 'System Administration'
      }, {
        iconSrc: supportIcon,
        stateRef: 'app.support',
        label: 'Support'
      }, {
        iconSrc: patternsIcon,
        stateRef: 'app.patterns',
        label: 'Style'
      }
    ];
  }

  isClosestState(sName) {
    const scores = this.links.map(l => matchState(l.stateRef, this.$state.current.name));
    return sName === this.links[scores.indexOf(Math.max.apply(null, scores))].stateRef;
  }
}

NavController.$inject = ['$state']

