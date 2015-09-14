angular.module('app.data').controller('data.controller', ['$scope', 'dataService', function ($scope, dataService) {
    $scope.skill = {
        name: '',
        description: '',
        book_reference: '',
        note: ''
    };
    $scope.ability = {
        name: '',
        description: '',
        book_reference: '',
        note: '',
        skills: [],
        cost: {
            might: 0,
            speed: 0,
            intellect: 0,
        },
        modifiers: {
            armor: 0,
            pools: {
                might: 0,
                speed: 0,
                intellect: 0,
                free: 0,
            },
            edge: {
                might: 0,
                speed: 0,
                intellect: 0,
                free: 0
            }
        }
    };
    $scope.descriptor = {
        name: '',
        description: '',
        book_reference: '',
        items: [],
        shin: 0,
        starting_link: [],
        abilities: {
            automatic: [],
            optional: []
        },
        skills: {
            automatic: [],
            optional: []
        },
        modifiers: {
            armor: 0,
            pools: {
                might: 0,
                speed: 0,
                intellect: 0,
                free: 0,
            },
            edge: {
                might: 0,
                speed: 0,
                intellect: 0,
                free: 0
            }
        }
    };
    $scope.type = {
        name: '',
        description: '',
        book_reference: '',
        shin: 0,
        items: [],
        cypher_slots: 0,
        pools: {
            might: 0,
            speed: 0,
            intellect: 0,
            free: 0
        },
        edge: {
            might: 0,
            speed: 0,
            intellect: 0,
            free: 0
        },
        abilities: {
            automatic: [],
            optional: []
        },
        skills: {
            automatic: [],
            optional: []
        }
    };
    $scope.focus = {
        name: '',
        description: '',
        book_reference: '',
        note: '',
        items: [],
        shin: 0,
        abilities: {
            automatic: [],
            optional: []
        },
        skills: {
            automatic: [],
            optional: []
        },
        modifiers: {
            armor: 0,
            pools: {
                might: 0,
                speed: 0,
                intellect: 0,
                free: 0,
            },
            edge: {
                might: 0,
                speed: 0,
                intellect: 0,
                free: 0
            }
        }
    };
    
    $scope.saveSkill = function() {
        dataService.saveData('skills', $scope.skill);
    };
    $scope.saveAbility = function() {
        dataService.saveData('abilities', $scope.ability);
    };
    $scope.saveDescriptor = function() {
        dataService.saveData('descriptors', $scope.descriptor);
    };
    $scope.saveType = function() {
        dataService.saveData('types', $scope.type);
    };
    $scope.saveFocus = function() {
        dataService.saveData('foci', $scope.focus);
    };
}]);