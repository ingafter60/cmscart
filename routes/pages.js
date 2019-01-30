var express = require('express');
var router = express.Router();

// http://localhost:3000/
// app.get('', function(req, res) {
router.get('/', function(req, res) {
    // res.send('Its working!');
    res.render('index', {
        title: 'Home'
    });
});

// http://localhost:3000/test
router.get('/test', function(req, res) {
    res.send('Front test!');
});

// Exports
module.exports = router;


