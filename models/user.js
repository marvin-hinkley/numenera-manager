var mongoose    = require('mongoose'),
    bcrypt      = require('bcrypt-nodejs');

var UserSchema   = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    joined: { type: Date, default: Date.now },
    characters: [String],
    password: String,
    local: {
        username: String,
        password: String
    },
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    }
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);