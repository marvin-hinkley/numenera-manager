var app = angular.module('app', [
    //vendor
    'ui.router',
    'ngResource',
    'ngStorage',
    'ngSanitize',
    'ngMaterial',
    'ngMessages',
    //app
    'app.shared',
    'app.users',
    'app.character',
    'app.auth',
    'app.data'
]);

app.config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider',
function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $locationProvider.html5Mode(true);
    //Routes
    $urlRouterProvider.otherwise('/');
    $stateProvider.
    state('home', {
        url: '/',
        templateUrl: 'views/_home.html',
        controller: 'app.controller',
        data: { secure: true }
    });
}]);

app.run(['$state', '$rootScope', '$sessionStorage', function ($state, $rootScope, $sessionStorage) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if (toState.data.secure && typeof $sessionStorage.user === 'undefined') {
            event.preventDefault();
            $state.go('login');
        }
    });
}]);