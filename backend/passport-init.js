/**
 * Created by mojtabaahmadi on 24/11/16.
 */
var LocalStrategy   = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');
//temporary data store
var users = {};
module.exports = function(passport){

    // Passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(user, done) {

        //tell passport which id to use for user
        console.log('serializing user:',user.username);
        return done(null, user.username);
    });

    passport.deserializeUser(function(username, done) {

        //return user object back
        return done(null, users[username]);

    });

    passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, username, password, done) {

            //check if username exist
            if (!users[username]){
                return done('username not exist', false);
            }
            //check if password is valid
            if (!isValidPassword(users[username],password)){
                return ('password is not valid', false);
            }
            //successfully logIn
            console.log('successfully logged in');
            return done(null, users[username]);
        }
    ));

    passport.use('signup', new LocalStrategy({
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },

        function(req, username, password, done) {
            // check if user already exist
            if(users[username]){
                return done('Username    already taken', false);
            }
            //add user to db
            users[username]={
                username: username,
                password: createHash(password)
            };
            return done(null, users[username]);
        })
    );

    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    };
    // Generates hash using bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };

};
