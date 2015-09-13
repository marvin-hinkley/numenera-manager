angular.module('app.auth', [])
    .config(
    ['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider',
     function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {
         $locationProvider.html5Mode(true);
         $urlRouterProvider.otherwise('/');
         $stateProvider.
         state('login', {
             url: '/login',
             templateUrl: 'views/_login.html',
             controller: 'login.controller'
         }).
         state('register', {
             url: '/register',
             templateUrl: 'views/_register.html',
             controller: 'register.controller'
         }).
         state('register.profile', {
             url: '/profile',
             templateUrl: 'views/_register.profile.html'
         }).
         state('register.characters', {
             url: '/characters',
             templateUrl: 'views/_register.characters.html'
         }).
         state('register.password', {
             url: '/password',
             templateUrl: 'views/_register.password.html'
         });
     }]);