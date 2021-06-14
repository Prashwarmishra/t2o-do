const passport = require('passport');
const User = require('../models/user');

const JWTStrategy = require('passport-jwt').Strategy;
const extractJWT = require('passport-jwt').ExtractJwt;

const opts = {
    jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'todoapp',
}

passport.use(new JWTStrategy(opts, function(jwtPayload, done){
    User.findById(jwtPayload._id, function(err, user){
        if(err){
            console.log('Error in JWT authentication::', err);
            return done(err);
        }
        if(user){
            return done(null, user);
        }
        return done(null, false);
    });
}));

module.exports = passport;