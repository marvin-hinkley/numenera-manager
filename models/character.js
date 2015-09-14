var mongoose    = require('mongoose'),
    bcrypt      = require('bcrypt-nodejs'),
    Schema      = mongoose.Schema;

var CharacterSchema   = new Schema({
    user: Schema.Types.ObjectId,
    name: String,
    age: Number,
    description: String,
    descriptor: Schema.Types.ObjectId,
    focus: Schema.Types.ObjectId,
    type: Schema.Types.ObjectId,
    shin: Number,
    items: [Schema.Types.Mixed],
    cypher_slots: Number,
    abilities: [Schema.Types.ObjectId],
    skills: [Schema.Types.ObjectId],
    tier: Number,
    effort: Number,
    health: Number,
    armor: Number,
    pools: {
        might: Number,
        speed: Number,
        intellect: Number
    },
    edge: {
        might: Number,
        speed: Number,
        intellect: Number
    }
});

module.exports = mongoose.model('Character', CharacterSchema);