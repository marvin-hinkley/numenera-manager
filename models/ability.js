var mongoose    = require('mongoose'),
    bcrypt      = require('bcrypt-nodejs'),
    Schema      = mongoose.Schema;

var AbilitySchema   = new Schema({
    name: String,
    description: String,
    book_reference: String,
    note: String,
    skills: [Schema.Types.ObjectId],
    cost: {
        might: Number,
        speed: Number,
        intellect: Number,
    },
    modifiers: {
        armor: Number,
        pools: {
            might: Number,
            speed: Number,
            intellect: Number,
            free: Number,
        },
        edge: {
            might: Number,
            speed: Number,
            intellect: Number,
            free: Number
        }
    }
});

module.exports = mongoose.model('Ability', AbilitySchema);