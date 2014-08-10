// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('unlisted', [
  'ionic',
  'ngMaterial',
  'unlisted.main',
  'ngFx',
  'unlisted.directives'

])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'app/app.html'
    });

  $urlRouterProvider.otherwise('/app/main/feed');
})

.controller('RootController', function($scope, $timeout, $materialSidenav, $state) {
  $scope.nav = {};
  var leftNav;
  $timeout(function() {
    leftNav = $materialSidenav($scope.nav.id);
  }.bind(this), 1000);

  this.navOpen = false;
  this.toggleLeft = function(swipe) {
    if (swipe === 'right' && !this.navOpen) {
      leftNav.toggle();
      return this.navOpen = true;
    }

    if (swipe === 'left' && this.navOpen) {
      leftNav.toggle();
      this.navOpen = false;
    }
  };

  this.theme = {

  };

  this.navHamburger = function() {
    leftNav.toggle();
    this.navOpen = !this.navOpen;
  };

  this.navigationLinks = [
    'profile',
    'claimed',
    'feed',
    'support',
    'about'
  ];

  $scope.$on('nav:close', function(){
    this.navOpen = false;
  }.bind(this));

  this.goTo = function(where) {
    this.toggleLeft('left');
    var state = 'app.main.' + where;
    if (state === $state.current.name) {
      return;
    }
    $state.go(where);
  };
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
