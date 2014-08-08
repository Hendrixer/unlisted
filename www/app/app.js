// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngMaterial'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.html'
    });

  $urlRouterProvider.otherwise('/home');
})

.controller('RootController', function($scope, $timeout, $materialSidenav) {
  var leftNav;
  $timeout(function() {
    leftNav = $materialSidenav('left');
  }, 1000);

  this.navOpen = false;
  this.toggleLeft = function() {
    leftNav.toggle();
    this.navOpen = !this.navOpen;
  };

  this.checkOpenThenClose = function() {
    if (this.navOpen) {
      this.toggleLeft();
    }
  };
})

.directive('ripple', function() {
  var parent, ink, x, y, d;
  return function($scope, $ele) {
    $ele.on('click', function(e) {
      parent = angular.element($ele.parent());
      console.log($ele, parent);
      if (parent.find('.ink').length === 0) {
        parent.prepend('<span class="ink"></span>');
      }

      ink = parent.find('.ink');
      console.log(ink);

      if (!ink.height() && !ink.width()) {
        d = Math.max(parent.outerWidth(), parent.outerHeight());
        ink.css({height: d, width: d});
      }

      x = e.pageX - parent.offset().left - ink.width()/2;
      y = e.pageY - parent.offset().top - ink.height()/2;

      ink.animate({top: y+'px', left: x+'px', opacity: 0, transform: 'scale(2.5)'});

    });
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
