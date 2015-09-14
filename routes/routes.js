module.exports = function routes(app, passport, models) {
    var router = app.Router();
    
    //Users
    router.get('/users', function(req, res) {
        User.find(function(err, users) {
            if (err) { res.send(err); }
            res.json(users);
        });
    });
    router.post('/users', function(req, res) {
        console.log('Request Body:');
        console.log(req.body);
        var user = new User();
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.username = req.body.username;
        user.email = req.body.email;
        user.password = req.body.password;

        user.save(function(err) {
            if (err) { res.send(err); }
            res.json({message: 'user created'});
        });
    });
    router.get('/users/:id', authenticated, function(req, res) {
        User.findById(req.params.id, '-password', function(err, user) {
            if (err) { res.send(err); }
            res.json(user);
        });
    });
    router.put('/users/:id', authenticated, function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err) { res.send(err); }
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.username = req.body.username;
            user.email = req.body.email;
            user.password = req.body.password;

            user.save(function(err) {
                if (err) { res.send(err); }
                res.json({message: 'user created'});
            });
        });
    });
    router.delete('/users/:id', authenticated, function(req, res) {
        User.remove({_id: req.params.id}, function(err, user) {
            if (err) { res.send(err) };
            res.json({ message: 'User deleted' });
        });
    });
    
    //authentication
    router.post('/authenticate', function(req, res, next) {
        console.log('authentication request body:');
        console.log(req.body);
        passport.authenticate('local-login', function(err, user, info) {
            if (err) { return next(err); }
            if (!user) { return res.send({ success : false, message : 'authentication failed' }); }
            delete user.local.password;
            return res.send({
                success : true,
                message : 'authentication succeeded',
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    joined: user.joined,
                    username: user.local.username
                }
            });
        })(req, res, next);
    });
    router.post('/register', function(req, res, next) {
        passport.authenticate('local-register', function(err, user, info) {
            if (err) { return next(err); }
            if (!user) { return res.send({ success : false, message : 'authentication failed' }); }
            return res.send({ success : true, message : 'authentication succeeded' });
        })(req, res, next);
    });
    
    //descriptors
    router.get('/descriptors', authenticated, function(req, res) {
        models.Descriptor.find(function(err, tasks) {
            if (err) { res.send(err); }
            res.json(tasks);
        });
    });
    router.get('/descriptors/:id', authenticated, function(req, res) {
        models.Descriptor.findById(req.params.id, function(err, task) {
            if (err) { res.send(err); }
            res.json(task);
        });
    });
    
    //types
    router.get('/types', authenticated, function(req, res) {
        models.Type.find(function(err, posts) {
            if (err) { res.send(err); }
            res.json(posts);
        });
    });
    router.get('/types/:id', authenticated, function(req, res) {
        models.Type.findById(req.params.id, function(err, post) {
            if (err) { res.send(err); }
            res.json(post);
        });
    });
    
    //foci
    router.get('/foci', authenticated, function(req, res) {
        models.Focus.find(function(err, posts) {
            if (err) { res.send(err); }
            res.json(posts);
        });
    });
    router.get('/foci/:id', authenticated, function(req, res) {
        models.Focus.findById(req.params.id, function(err, post) {
            if (err) { res.send(err); }
            res.json(post);
        });
    });
    
    //skills
    router.get('/skills', authenticated, function(req, res) {
        models.Skill.find(function(err, posts) {
            if (err) { res.send(err); }
            res.json(posts);
        });
    });
    router.get('/skills/:id', authenticated, function(req, res) {
        models.Skill.findById(req.params.id, function(err, post) {
            if (err) { res.send(err); }
            res.json(post);
        });
    });
    
    //abilities
    router.get('/abilities', authenticated, function(req, res) {
        models.Ability.find(function(err, posts) {
            if (err) { res.send(err); }
            res.json(posts);
        });
    });
    router.get('/abilities/:id', authenticated, function(req, res) {
        models.Ability.findById(req.params.id, function(err, post) {
            if (err) { res.send(err); }
            res.json(post);
        });
    });
    
    //characters
    router.get('/characters', authenticated, function(req, res) {
        models.Character.find(function(err, users) {
            if (err) { res.send(err); }
            res.json(users);
        });
    });
    router.post('/characters', authenticated, function(req, res) {
        console.log('Request Body:');
        console.log(req.body);
        var character = new models.Character();
        character.user = req.body.user;
        character.name = req.body.name;
        character.age = req.body.age;
        character.description = req.body.description;
        character.focus = req.body.focus;
        character.type = req.body.type;
        character.shin = req.body.shin;
        character.items = req.body.items;
        character.cypher_slots = req.body.cypher_slots;
        character.abilities = req.body.abilities;
        character.skills = req.body.skills;
        character.tier = req.body.tier;
        character.effort = req.body.effort;
        character.health = req.body.health;
        character.armor = req.body.armor;
        character.pools = req.body.pools;
        character.edge = req.body.edge;

        character.save(function(err) {
            if (err) { res.send(err); }
            res.json({message: 'character created', character: character});
        });
    });
    router.get('/characters/:id', authenticated, function(req, res) {
        models.Character.findById(req.params.id, function(err, user) {
            if (err) { res.send(err); }
            res.json(user);
        });
    });
    router.put('/characters/:id', authenticated, function(req, res) {
        models.character.findById(req.params.id, function(err, user) {
            if (err) { res.send(err); }
            character.user = req.body.user;
            character.name = req.body.name;
            character.age = req.body.age;
            character.description = req.body.description;
            character.focus = req.body.focus;
            character.type = req.body.type;
            character.shin = req.body.shin;
            character.items = req.body.items;
            character.cypher_slots = req.body.cypher_slots;
            character.abilities = req.body.abilities;
            character.skills = req.body.skills;
            character.tier = req.body.tier;
            character.effort = req.body.effort;
            character.health = req.body.health;
            character.armor = req.body.armor;
            character.pools = req.body.pools;
            character.edge = req.body.edge;

            character.save(function(err) {
                if (err) { res.send(err); }
                res.json({message: 'user created'});
            });
        });
    });
    router.delete('/characters/:id', authenticated, function(req, res) {
        models.Character.remove({_id: req.params.id}, function(err, user) {
            if (err) { res.send(err) };
            res.json({ message: 'User deleted' });
        });
    });
    
    return router;
};

function authenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    return res.send({ success: false, message: 'not_authenticated', status: 401 });
}