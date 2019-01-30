var express = require('express');
var router = express.Router();

// http://localhost:3000/admin/pages
router.get('/', function(req, res) {
    res.render('admin', {
        title: 'Admin'
    });
});

// http://localhost:3000/admin/pages/test
router.get('/test', function(req, res) {
    res.send('Admin test');
});

// Exports
module.exports = router;