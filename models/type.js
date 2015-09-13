var mongoose    = require('mongoose'),
    bcrypt      = require('bcrypt-nodejs'),
    Schema      = mongoose.Schema;

var TypeSchema   = new Schema({
    name: String,
    description: String,
    book_reference: String,
    shin: Integer,
    items: [Schema.Types.Mixed],
    cypher_slots: Integer,
    pools: {
        might: Integer,
        speed: Integer,
        intellect: Integer,
        free: Integer
    },
    edge: {
        might: Integer,
        speed: Integer,
        intellect: Integer,
        free: Integer
    },
    abilities: {
        automatic: [Schema.Types.ObjectId],
        optional: [Schema.Types.ObjectId]
    },
    skills: {
        automatic: [Schema.Types.ObjectId],
        optional: [Schema.Types.ObjectId]
    }
});

module.exports = mongoose.model('Type', TypeSchema);