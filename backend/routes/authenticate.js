/**
 * Created by mojtabaahmadi on 23/11/16.
 */
var express = require('express');
var router = express.Router();

module.exports = function(passport){

    //send successful login status back to angular
    router.get('/success', function(req, res){
       res.send({state: 'success', user: req.user ? req.user : null});
    });

    //send failure login status back to angular
    router.get('/failure', function(req, res){
        res.send({state: 'failure', user: null, message: "Invalid username and password"});
    });

    //log in
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/auth/success',
        failureRedirect: '/auth/failure'
    }));

    //sign up
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/auth/success',
        failureRedirect: '/auth/failure'
    }));

    //sign out
    router.get('/signout', function(req ,res) {
       req.logout();
       res.redirect('/');
    });

    return router;
}
