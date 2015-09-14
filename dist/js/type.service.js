angular.module('app.shared').factory('typeService', ['$q', '$http', function ($q, $http) {
    return {
        getTypes: function (id) {
            return $http.get('/api/types');
        }
    };
}]);