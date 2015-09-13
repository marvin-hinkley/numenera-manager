var mongoose    = require('mongoose'),
    bcrypt      = require('bcrypt-nodejs'),
    Schema      = mongoose.Schema;

var AbilitySchema   = new Schema({
    name: String,
    description: String,
    book_reference: String,
    note: String,
    cost: {
        might: Integer,
        speed: Integer,
        intellect: Integer,
    },
    modifiers: {
        armor: Integer,
        pools: {
            might: Integer,
            speed: Integer,
            intellect: Integer,
            free: Integer,
        },
        edge: {
            might: Integer,
            speed: Integer,
            intellect: Integer,
            free: Integer
        }
    }
});

module.exports = mongoose.model('Ability', AbilitySchema);