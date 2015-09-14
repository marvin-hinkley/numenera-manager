angular.module('app.character').controller('character.create.controller', ['$scope', 'Character', 'characterService', 'descriptors', 'types', 'foci', function ($scope, Character, characterService, descriptors, types, foci) {
    $scope.character = new Character();
    $scope.descriptors = descriptors;
    $scope.types = types;
    $scope.foci = foci;
    
    $scope.save = function() {
        characterService.newCharacter($scope.character);
    };
}]);