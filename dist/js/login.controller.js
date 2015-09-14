angular.module('app.auth').controller('login.controller', ['$scope', '$state', '$sessionStorage', 'authService', function ($scope, $state, $sessionStorage, authService) {
    $scope.credentials = {
        username: '',
        password: ''
    };
    $scope.status = '';

    $scope.login = function (valid) {
        authService.login($scope.credentials, function(user) {
            if (user) {
                console.log(user);
                $sessionStorage.user = user;
                $state.go('home');
            } else {
                $scope.status = 'not logged in';
            }
        });
    };
}]);