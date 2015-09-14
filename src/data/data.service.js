angular.module('app.data').factory('dataService', ['$http', '$sessionStorage', function ($http, $sessionStorage) {
    return {
        saveData: function (category, fields) {
            $http.post('/'+category+'/', fields)
            .success(function(character) {
                console.log('new '+category+' saved');
            })
            .error(function(err) {
                console.log('error saving new '+category+': '+err);
            });
        }
    };
}]);