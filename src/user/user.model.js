angular.module('app.users').factory('User', [function () {
    var User = function (user) {
        if (typeof user !== 'undefined') {
            this.firstName = user.firstName;
            this.lastName = user.lastName;
            this.username = user.username;
            this.email = user.email;
            this.joined = user.joined;
            this.characters = user.characters;
        } else {
            this.firstName = '';
            this.lastName = '';
            this.username = '';
            this.email = '';
            this.joined = null;
            this.characters = [];
        }        
    };

    return User;
}]);