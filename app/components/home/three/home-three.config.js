import HomeThreeController from './home-three.controller';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.home.three', {
      url: '/three',
      controller: HomeThreeController,
      controllerAs: 'homeThree',
      templateProvider: (templateCache) => templateCache.get('home/three/home-three.html')
    });
};

export default stateConfig;
