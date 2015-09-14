angular.module('app.character', [])
.config(
    ['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider.
        state('character', {
            url: '/character/:id',
            templateUrl: 'views/_character.html',
            controller: 'character.controller',
            resolve: {
                requestedCharacter: ['$q', '$stateParams', 'Character', 'characterService', function ($q, $stateParams, Character, characterService) {
                    var defer = $q.defer();
                    characterService.getCharacterByID($stateParams.id).success(function (data) {
                        defer.resolve(new Character(data));
                    }).error(function (err) {
                        console.log('Character retrieval error: ' + err);
                        defer.reject(err);
                    });
                    return defer.promise;
                }]
            },
            data: { secure: true }
        }).
        state('createCharacter', {
            url: '/character/create',
            templateUrl: 'views/_character.create.html',
            controller: 'character.create.controller',
            resolve: {
                descriptors: ['$q', 'descriptorService', function ($q, descriptorService) {
                    var defer = $q.defer();
                    descriptorService.getDescriptors().success(function (data) {
                        defer.resolve(data);
                    }).error(function (err) {
                        console.log('Descriptor retrieval error: ' + err);
                        defer.reject(err);
                    });
                    return defer.promise;
                }],
                types: ['$q', 'typeService', function ($q, typeService) {
                    var defer = $q.defer();
                    typeService.getTypes().success(function (data) {
                        defer.resolve(data);
                    }).error(function (err) {
                        console.log('Type retrieval error: ' + err);
                        defer.reject(err);
                    });
                    return defer.promise;
                }],
                foci: ['$q', 'focusService', function ($q, focusService) {
                    var defer = $q.defer();
                    focusService.getFoci().success(function (data) {
                        defer.resolve(data);
                    }).error(function (err) {
                        console.log('Focus retrieval error: ' + err);
                        defer.reject(err);
                    });
                    return defer.promise;
                }]
            },
            data: { secure: true }
        }).
        state('createCharacter.profile', {
            url: '/profile',
            templateUrl: 'views/_character.create.profile.html',
            data: { secure: true }
        }).
        state('createCharacter.descriptor', {
            url: '/descriptor',
            templateUrl: 'views/_character.create.descriptor.html',
            data: { secure: true }
        }).
        state('createCharacter.type', {
            url: '/type',
            templateUrl: 'views/_character.create.type.html',
            data: { secure: true }
        }).
        state('createCharacter.focus', {
            url: '/focus',
            templateUrl: 'views/_character.create.focus.html',
            data: { secure: true }
        }).
        state('createCharacter.equipment', {
            url: '/equipment',
            templateUrl: 'views/_character.create.equipment.html',
            data: { secure: true }
        });
}]);