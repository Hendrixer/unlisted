angular.module('unlisted.main.profile', [])

.config(function($stateProvider) {
  $stateProvider
    .state('app.main.profile', {
      url: '/profile',
      templateUrl: 'app/main/profile/profile.html',
      controller: 'ProfileController as profile'
    });
})
.controller('ProfileController', function($scope) {

});
