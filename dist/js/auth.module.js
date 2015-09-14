angular.module('app.auth', [])
    .config(
    ['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider',
     function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {
         $locationProvider.html5Mode(true);
         $urlRouterProvider.otherwise('/');
         $stateProvider.
         state('register', {
             url: '/register',
             templateUrl: 'views/_register.html',
             controller: 'register.controller',
             data: { secure: false }
         }).
         state('login', {
             url: '/login',
             templateUrl: 'views/_login.html',
             controller: 'login.controller',
             data: { secure: false }
         });
     }]);