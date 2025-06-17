(function () {
  'use strict';

  angular.module('public', ['ui.router'])
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/signup');

    $stateProvider
      .state('signup', {
        url: '/signup',
        templateUrl: 'signup/signup.html',
        controller: 'SignUpController as signupCtrl'
      })
      .state('myinfo', {
        url: '/myinfo',
        templateUrl: 'myinfo/myinfo.html',
        controller: 'MyInfoController as myinfoCtrl'
      });
  }
})();