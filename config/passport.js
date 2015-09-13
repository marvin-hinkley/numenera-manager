var passport        = require('passport'),
    User            = require('../models/user'),
    localStrategy   = require('passport-local').Strategy;

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
    
    passport.use('local-register', new localStrategy(
        { passReqToCallback: true },
        function(req, username, password, done) {
            process.nextTick(function() {
                User.findOne({'local.username': username}, function(err, user) {
                    if (err) { return done(err); }
                    if (user) {
                        return done(null, false, 'username exists');
                    } else {
                        var newUser = new User();
                        newUser.local.username = username;
                        newUser.local.password = newUser.generateHash(password);
                        newUser.save(function(err) {
                            if (err) { throw err; }
                            return done(null, newUser);
                        });
                    }
                })
            });
        }
    ));
};