var mongoose    = require('mongoose'),
    bcrypt      = require('bcrypt-nodejs'),
    Schema      = mongoose.Schema;

var DescriptorSchema   = new Schema({
    name: String,
    description: String,
    book_reference: String,
    note: String,
    items: [Schema.Types.Mixed],
    shin: Integer,
    starting_link: [String],
    abilities: {
        automatic: [Schema.Types.ObjectId],
        optional: [Schema.Types.ObjectId]
    },
    skills: {
        automatic: [Schema.Types.ObjectId],
        optional: [Schema.Types.ObjectId]
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

module.exports = mongoose.model('Descriptor', DescriptorSchema);