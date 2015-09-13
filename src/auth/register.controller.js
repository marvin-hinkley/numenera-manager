angular.module('app.auth').controller('register.controller', ['$scope', '$state', 'authService', 'User', function ($scope, $state, authService, User) {
    $scope.user = new User();
    $scope.status = '';
    
    $scope.register = function () {
        console.log('hit controller registration');
        authService.register($scope.user, function(registered) {
            if (registered) {
                $state.go('login');
            }
        });
    };
}]);