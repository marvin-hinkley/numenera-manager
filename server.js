var express         = require('express'),
    path            = require('path'),
    fs              = require('fs'),
    http            = require('http'),
    serveStatic     = require('serve-static'),
    morgan          = require('morgan'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    app             = express(),
    routes          = require('./routes/routes'),
    mongoose        = require('mongoose'),
    jwt             = require('jsonwebtoken'),
    passport        = require('passport'),
    session         = require('express-session'),
    flash           = require('connect-flash'),
    models          = require('./models/models.module.js');

//Configuration---------------------------------------------------------------------------------
require('./config/passport')(passport, models);
app.use(express.static(path.join(__dirname, 'dist')));
app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(session({ secret: 'secret' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

server = http.createServer(app).listen(process.env.PORT || 9600, function(){
    console.log('Server started with PID ' + process.pid + ' at port ' + (process.env.PORT || 9600) + ', Master.');
});
mongoose.connect('mongodb://localhost/numenera_manager');

//Routes----------------------------------------------------------------------------------------
app.use('/api', routes(express, passport, models));
app.get('*', function(req, res) {
    res.sendFile('index.html', {
        root: __dirname + '/dist/',
        dotfiles: 'deny'
    }, function(err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    });
});