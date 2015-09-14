angular.module('app.data').controller('data.controller', ['$scope', 'dataService', function ($scope, dataService) {
    $scope.skill = {};
    $scope.ability = {};
    $scope.descriptor = {};
    $scope.type = {};
    $scope.focus = {};
    
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