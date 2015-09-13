angular.module('app.auth').controller('login.controller', ['$scope', '$state', 'authService', function ($scope, $state, authService) {
    $scope.credentials = {
        username: '',
        password: ''
    };
    $scope.status = '';
    
    $scope.login = function (valid) {
        if (valid) {
            authService.login($scope.credentials, function(authenticated) {
                if (authenticated) {
                    $state.go('home');
                } else {
                    $scope.status = 'suck eggs';
                }
            });
        }
    };
}]);