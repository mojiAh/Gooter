/**
 * Created by mojtabaahmadi on 25/11/16.
 */
var express = require('express');
var router = express.Router();

//Home page

router.get('/', function (req, res, next) {
    res.render('index', {title: 'gooter!'});
});

module.exports = router;
