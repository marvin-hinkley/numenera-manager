angular.module('app.data', [])
    .config(
    ['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider',
     function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {
         $locationProvider.html5Mode(true);
         $urlRouterProvider.otherwise('/');
         $stateProvider.
         state('data', {
             url: '/data',
             templateUrl: 'views/_data.html',
             controller: 'data.controller',
             data: { secure: true }
         }).
         state('data.skill', {
             url: '/skill',
             templateUrl: 'views/_data.skill.html',
             data: { secure: true }
         }).
         state('data.ability', {
             url: '/ability',
             templateUrl: 'views/_data.ability.html',
             data: { secure: true }
         }).
         state('data.descriptor', {
             url: '/descriptor',
             templateUrl: 'views/_data.descriptor.html',
             data: { secure: true }
         }).
         state('data.type', {
             url: '/type',
             templateUrl: 'views/_data.type.html',
             data: { secure: true }
         }).
         state('data.focus', {
             url: '/focus',
             templateUrl: 'views/_data.focus.html',
             data: { secure: true }
         });
     }]);