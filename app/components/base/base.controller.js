import moment from 'moment';

export default class BaseController {
  constructor($interval, $state, $log, apiService) {
    var now = moment();
    this.lastSaved = now.fromNow();

    apiService.User.get({id: 1}).$promise.then(user => {
      $log.log('MOCKED GET:');
      $log.log(user);
      this.user = user;
    });

    apiService.User.update({id: 1}, this.user).$promise.then(res => {
      $log.log('MOCKED PUT:');
      $log.log(res);
    });

    apiService.User.save(this.user).$promise.then(res => {
      $log.log('MOCKED POST:');
      $log.log(res);
    });

    apiService.User.remove(this.user).$promise.then(res => {
      $log.log('MOCKED DELETE:');
      $log.log(res);
    });

    apiService.User.query(this.user).$promise.then(res => {
      $log.log('MOCKED QUERY:');
      $log.log(res);
    });

    this.doesStateInclude = (stateName) => $state.includes(stateName);

    let updateLastSaved = () => {
      this.lastSaved = moment(now).fromNow();
    };

    $interval(updateLastSaved, 10000);
  }
}

BaseController.$inject = ['$interval', '$state', '$log', 'apiService'];
