var mongoose    = require('mongoose'),
    bcrypt      = require('bcrypt-nodejs'),
    Schema      = mongoose.Schema;

var TypeSchema   = new Schema({
    name: String,
    description: String,
    book_reference: String,
    shin: Number,
    items: [Schema.Types.Mixed],
    cypher_slots: Number,
    pools: {
        might: Number,
        speed: Number,
        intellect: Number,
        free: Number
    },
    edge: {
        might: Number,
        speed: Number,
        intellect: Number,
        free: Number
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