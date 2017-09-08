// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    // .run(function($ionicPlatform) {
    //   $ionicPlatform.ready(function() {
        var push = new Ionic.Push({
          "debug": true
        });

        push.register(function(token) {
          console.log("Device token:",token.token);
        });
    //   });
    // })
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })


  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })

  .state('app.order-queue', {
      url: '/order-queue',
      views: {
        'menuContent': {
          templateUrl: 'templates/order-queue.html'
        }
      }
  })

  .state('app.order-detail-1', {
    url:'/order-detail-1',
    views: {
      'menuContent': {
        templateUrl:'templates/order-detail-1.html'
      }
    }
  })
  .state('app.order-detail-2', {
    url:'/order-detail-2',
    views: {
      'menuContent': {
        templateUrl:'templates/order-detail-2.html'
      }
    }
  })
    .state('app.order-detail-3', {
    url:'/order-detail-3',
    views: {
      'menuContent': {
        templateUrl:'templates/order-detail-3.html'
      }
    }
  })
  .state('app.detail', {
      url: '/detail',
      views: {
        'menuContent': {
          templateUrl: 'templates/detail.html'
        }
      }
    })

  .state('app.createmeal', {
      url: '/createmeal',
      views: {
        'menuContent': {
          templateUrl: 'templates/createmeal.html'
        }
      }
    })

  .state('app.order', {
      url: '/order',
      views: {
        'menuContent': {
          templateUrl: 'templates/order.html'
        }
      }
    })

  .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html'
        }
      }
    })

  .state('app.profile-chef-view', {
      url: '/profile-chef-view',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile-chef-view.html'
        }
      }
  })

  .state('app.edit-profile', {
      url: '/edit-profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/edit-profile.html'
        }
      }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/browse');
});
