var mongoose    = require('mongoose'),
    bcrypt      = require('bcrypt-nodejs'),
    Schema      = mongoose.Schema;

var FocusSchema   = new Schema({
    name: String,
    description: String,
    book_reference: String,
    note: String,
    items: [Schema.Types.Mixed],
    shin: Number,
    abilities: {
        automatic: [Schema.Types.ObjectId],
        optional: [Schema.Types.ObjectId]
    },
    skills: {
        automatic: [Schema.Types.ObjectId],
        optional: [Schema.Types.ObjectId]
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

module.exports = mongoose.model('Focus', FocusSchema);