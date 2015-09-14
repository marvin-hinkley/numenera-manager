angular.module('app.auth').factory('authService', ['$q', '$http', 'User', function ($q, $http, User) {
    return {
        login: function (credentials, cb) {
            $http.post('/api/authenticate', credentials)
            .success(function(data) {
                cb(data.user);
            })
            .error(function(err) {
                cb(false);
            });
        },
        register: function (user, cb) {
            console.log('registering user: ' + user.username);
            $http.post('/api/register', user)
            .success(function(data) {
                console.log('user registered');
                cb(true);
            })
            .error(function(err) {
                console.log('user registration error: ' + err);
                cb(false);
            });
        }
    };
}]);