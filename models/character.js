var mongoose    = require('mongoose'),
    bcrypt      = require('bcrypt-nodejs'),
    Schema      = mongoose.Schema;

var CharacterSchema   = new Schema({
    name: String,
    age: Integer,
    description: String,
    descriptor: Schema.Types.ObjectId,
    focus: Schema.Types.ObjectId,
    type: Schema.Types.ObjectId,
    shin: Integer,
    items: [Schema.Types.Mixed],
    cypher_slots: Integer,
    abilities: [Schema.Types.ObjectId],
    skills: [Schema.Types.ObjectId],
    tier: Integer,
    effort: Integer,
    health: Integer,
    armor: Integer,
    pools: {
        might: Integer,
        speed: Integer,
        intellect: Integer
    },
    edge: {
        might: Integer,
        speed: Integer,
        intellect: Integer
    }
});

module.exports = mongoose.model('Character', CharacterSchema);