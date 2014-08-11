angular.module('unlisted.main', [
    'unlisted.main.feed',
    'unlisted.main.profile'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.main', {
      url: '/main',
      templateUrl: 'app/main/main.html',
      abstract: true,
      controller: 'MainController as main'
    });
})

.controller('MainController', function($scope) {
  this.name = 'main';
  console.log('main');
});
