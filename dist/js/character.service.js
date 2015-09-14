angular.module('app.character').factory('characterService', ['$q', '$http', '$sessionStorage', 'Character', function ($q, $http, $sessionStorage, Character) {
    return {
        getCharacterByID: function (id) {
            var defer = $q.defer();
            $http.get('/characters/' + id)
            .success(function(character) {
                defer.resolve(new Character(character));
            })
            .error(function(err) {
                defer.reject(err);
            });
            return defer.promise;
        },
        newCharacter: function (character) {
            var defer = $q.defer();
            $http.post('/characters/', character)
            .success(function(data) {
                console.log('new character saved');
                defer.resolve(new Character(data));
            })
            .error(function(err) {
                defer.reject(err);
            });
            return defer.promise;
        },
        updateCharacter: function (id, character) {
            var defer = $q.defer();
            $http.put('/characters/' + id, character)
            .success(function(data) {
                defer.resolve(new Character(data));
            })
            .error(function(err) {
                defer.reject(err);
            });
            return defer.promise;
        }
    };
}]);