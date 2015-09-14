var LocalStrategy   = require('passport-local').Strategy;

module.exports = function(passport, models) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function(id, done) {
        models.User.findById(id, function(err, user) {
            done(err, user);
        });
    });
    
    passport.use('local-register', new LocalStrategy(
        { passReqToCallback: true },
        function(req, username, password, done) {
            process.nextTick(function() {
                models.User.findOne({'local.username': username}, function(err, user) {
                    if (err) { return done(err); }
                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {
                        var newUser = new models.User();
                        newUser.local.username = username;
                        newUser.local.password = newUser.generateHash(password);
                        newUser.firstName = req.body.firstName;
                        newUser.lastName = req.body.lastName;
                        newUser.email = req.body.email;
                        
                        newUser.save(function(err) {
                            if (err) { throw err; }
                            return done(null, newUser);
                        });
                    }
                })
            });
        }
    ));
    
    passport.use('local-login', new LocalStrategy(
        { passReqToCallback : true },
        function(req, username, password, done) {
            console.log('Attempting authentication as ' + username + ' with password ' + password);
            models.User.findOne({ 'local.username' :  username }, function(err, user) {
                if (err) { return done(err); }
                if (!user) { return done(null, false, req.flash('loginMessage', 'No user found.')); }
                if (!user.validatePassword(password)) { return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); }
                
                return done(null, user);
            });
        }
    ));
};