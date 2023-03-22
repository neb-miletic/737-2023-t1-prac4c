const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Configure the JWT options
const jwtOptions = {
    secretOrKey: 'my_secret_key',
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

// Define the JWT strategy
passport.use(new JwtStrategy(jwtOptions, (jwtPayload, done) => {
    // Check if the token is valid
    if (jwtPayload.sub === '1234567890') {
        return done(null, true);
    } else {
        return done(null, false);
    }
}));
