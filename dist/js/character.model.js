angular.module('app.character').factory('Character', ['$http', function ($http) {
    var Character = function (character) {
        if (typeof character !== 'undefined') {
            this.name = character.name;
            this.age = character.age;
            this.description = character.description;
            this.descriptor = character.descriptor;
            this.focus = character.focus;
            this.type = character.type;
            this.shin = character.shin;
            this.items = character.items;
            this.cypher_slots = character.cypher_slots;
            this.abilities = character.abilities;
            this.skills = character.skills;
            this.tier = character.tier;
            this.effort = character.effort;
            this.health = character.health;
            this.armor = character.armor;
            this.pools = character.pools;
            this.edge = character.edge;
        } else {
            this.name = '';
            this.age = 0;
            this.description = '';
            this.descriptor = '';
            this.focus = '';
            this.type = '';
            this.shin = 0;
            this.items = [];
            this.cypher_slots = 0;
            this.abilities = [];
            this.skills = [];
            this.tier = 0;
            this.effort = 0;
            this.health = 0;
            this.armor = 0;
            this.pools = {
                might: 0,
                speed: 0,
                intellect: 0
            };
            this.edge = {
                might: 0,
                speed: 0,
                intellect: 0
            };
        }
    };
    return Character;
}]);