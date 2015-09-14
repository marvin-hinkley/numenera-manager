angular.module('app.shared').factory('focusService', ['$q', '$http', function ($q, $http) {
    return {
        getFoci: function (id) {
            return $http.get('/api/foci');
        }
    };
}]);