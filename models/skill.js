var mongoose    = require('mongoose'),
    bcrypt      = require('bcrypt-nodejs'),
    Schema      = mongoose.Schema;

var SkillSchema   = new Schema({
    name: String,
    description: String,
    book_reference: String,
    note: String,
});

module.exports = mongoose.model('Skill', SkillSchema);