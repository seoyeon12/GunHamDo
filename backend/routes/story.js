const express = require('express');
const router = express.Router();
const storys = require('../data/story.json');

router.get('/', function(req, res){
    res.send(storys);
});

router.get('/:id', function(req, res){
    const id = parseInt(req.params.id, 10);
    const story = storys.filter(function(story){
        return story.id === id;
    });
    res.send(story);
});

module.exports = router;