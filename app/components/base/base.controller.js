import moment from 'moment';

export default class BaseController {
  constructor($interval, $state) {
    var now = moment();
    this.lastSaved = now.fromNow();

    this.user = {
      firstName: 'Stan',
      lastName: 'Lee'
    };

    this.doesStateInclude = (stateName) => $state.includes(stateName);

    let updateLastSaved = () => {
      this.lastSaved = moment(now).fromNow();
    };

    $interval(updateLastSaved, 10000);
  }
}
