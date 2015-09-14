angular.module('app.shared').factory('descriptorService', ['$q', '$http', function ($q, $http) {
    return {
        getDescriptors: function (id) {
            return $http.get('/api/descriptors');
        }
    };
}]);