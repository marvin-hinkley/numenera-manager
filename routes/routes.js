var Models = require('../models/models.module.js');

module.exports = function routes(app, passport) {
    var router = app.Router();

    router.post('/login', function(req, res) {
        
    });
    router.post('/register', passport.authenticate('local-register'));
    
    //descriptors
    router.get('/tasks', function(req, res) {
        Task.find(function(err, tasks) {
            if (err) { res.send(err); }
            res.json(tasks);
        });
    });
    router.get('/tasks/:id', function(req, res) {
        Task.findById(req.params.id, function(err, task) {
            if (err) { res.send(err); }
            res.json(task);
        });
    });
    
    //types
    router.get('/posts', function(req, res) {
        Post.find(function(err, posts) {
            if (err) { res.send(err); }
            res.json(posts);
        });
    });
    router.get('/posts/:id', function(req, res) {
        Post.findById(req.params.id, function(err, post) {
            if (err) { res.send(err); }
            res.json(post);
        });
    });
    
    //foci
    router.get('/posts', function(req, res) {
        Post.find(function(err, posts) {
            if (err) { res.send(err); }
            res.json(posts);
        });
    });
    router.get('/posts/:id', function(req, res) {
        Post.findById(req.params.id, function(err, post) {
            if (err) { res.send(err); }
            res.json(post);
        });
    });
    
    //skills
    router.get('/posts', function(req, res) {
        Post.find(function(err, posts) {
            if (err) { res.send(err); }
            res.json(posts);
        });
    });
    router.get('/posts/:id', function(req, res) {
        Post.findById(req.params.id, function(err, post) {
            if (err) { res.send(err); }
            res.json(post);
        });
    });
    
    //abilities
    router.get('/posts', function(req, res) {
        Post.find(function(err, posts) {
            if (err) { res.send(err); }
            res.json(posts);
        });
    });
    router.get('/posts/:id', function(req, res) {
        Post.findById(req.params.id, function(err, post) {
            if (err) { res.send(err); }
            res.json(post);
        });
    });
    
    //characters
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
    router.get('/users/:id', function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err) { res.send(err); }
            res.json(user);
        });
    });
    router.put('/users/:id', function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err) { res.send(err); }
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.username = req.body.username;
            user.age = req.body.age;
            user.email = req.body.email;
            user.officer = req.body.officer;
            user.password = req.body.password;

            user.save(function(err) {
                if (err) { res.send(err); }
                res.json({message: 'user created'});
            });
        });
    });
    router.delete('/users/:id', function(req, res) {
        User.remove({_id: req.params.id}, function(err, user) {
            if (err) { res.send(err) };
            res.json({ message: 'User deleted' });
        });
    });
    
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
    router.get('/users/:id', function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err) { res.send(err); }
            res.json(user);
        });
    });
    router.put('/users/:id', function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err) { res.send(err); }
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.username = req.body.username;
            user.age = req.body.age;
            user.email = req.body.email;
            user.officer = req.body.officer;
            user.password = req.body.password;
            
            user.save(function(err) {
                if (err) { res.send(err); }
                res.json({message: 'user created'});
            });
        });
    });
    router.delete('/users/:id', function(req, res) {
        User.remove({_id: req.params.id}, function(err, user) {
            if (err) { res.send(err) };
            res.json({ message: 'User deleted' });
        });
    });
    
    return router;
};

function authenticated(req, res, next) {
    
}