angular.module('unlisted.main.feed', [])

.config(function($stateProvider) {
  $stateProvider
    .state('app.main.feed', {
      url: '/feed',
      templateUrl: 'app/main/feed/feed.html',
      controller: 'FeedController as feed'
    });
})
.controller('FeedController', function($scope, Mock) {

  this.name = 'feed';
  $scope.nav.id = this.name;

  this.user = Mock.user;
  this.companies = Mock.companies;
  this.hero = Mock.hero;

  console.log(this);
});

