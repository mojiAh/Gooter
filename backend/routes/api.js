/**
 * Created by mojtabaahmadi on 23/11/16.
 */
var express = require('express');
var router = express.Router();

router.route('/posts')

    //return all post
    .get(function (req, res) {
    res.send({message: 'TODO return all posts'});
    })

    .post(function (req, res) {
    res.send({message: 'TODO create a new post'});
    });

router.route('/posts/:id')

    //return particular post
    .get(function (req, res) {
        res.send({message: 'TODO return particular post'+ req.params.id});
    })

    //modify a post
    .post(function (req, res) {
        res.send({message: 'TODO modify particular post'+ req.params.id});
    })

    //delete a post
    .delete(function (req, res) {
        res.send({message: 'TODO delete particular post'+ req.params.id});
    });




module.exports = router;
