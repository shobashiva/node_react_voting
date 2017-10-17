'use strict'

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var user = require('./model/user');

var credentials = require('./credentials.json');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

mongoose.connect('mongodb://localhost/mern')

var comments = require('./routes/comments');
var votes = require('./routes/votes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(require('cookie-parser')(credentials.cookieSecret));
app.use(require('express-session')({
    resave:false,
    saveUninitialized:false,
    secret:credentials.cookieSecret
}));

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 res.setHeader('Cache-Control', 'no-cache');
 next();

});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


var passport = require('passport'), 
    FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: credentials.facebook.app_id,
    clientSecret: credentials.facebook.app_secret,
    callbackURL: credentials.facebook.callback,
    enableProof: true,
    profileFields:['id','displayName','emails']
    }, function(accessToken, refreshToken, profile, done) {
        console.log(profile);
        var me = new user({
            email:profile.emails[0].value,
            name:profile.displayName
        });

        /* save if new */
        user.findOne({email:me.email}, function(err, u) {
            if(!u) {
                me.save(function(err, me) {
                    if(err) return done(err);
                    done(null,me);
                });
            } else {
                console.log(u);
                done(null, u);
            }
        });
  }
));

passport.serializeUser(function(user, done) {
    console.log(user);
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    user.findById(id, function(err, user) {
        done(err, user);
    });
});

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/facebook', passport.authenticate('facebook', {scope:"email"}));
app.get('/auth/facebook/callback', passport.authenticate('facebook', 
{ successRedirect: 'http://localhost:3000/vote', failureRedirect: '/login' }));

function isLoggedIn(req, res, next) {
    req.loggedIn = !!req.user;
    next();
}

app.get('/login', isLoggedIn, function(req, res) {
    if(req.loggedIn) {
    	res.redirect('http://localhost:3000/vote');
    }
    else{

    	res.redirect('/auth/facebook');
    }
});


router.get('/', isLoggedIn, function(req, res) {
	if (req.loggedIn){
		res.redirect('http://localhost:3000/vote');
	}
	else{
		res.redirect('/login')
	}
});

router.get('/user', isLoggedIn,function(req, res) {
	console.log(req.user);
});

app.use(router);
app.use('/comments', comments);
app.use('/votes', votes);

app.listen(port, function() {
	console.log('app running on port: ' + port);
});

