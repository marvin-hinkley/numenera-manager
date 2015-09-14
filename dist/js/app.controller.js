angular.module('app').controller('app.controller', ['$scope', '$sessionStorage', function ($scope, $sessionStorage) {
    $scope.status = '';

    $scope.logout = function() {
        authService.logout();
    };
}]);