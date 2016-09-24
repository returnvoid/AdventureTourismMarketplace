(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(Atm, app, auth, database) {

        var users = require('../controllers/users');
        var tours = require('../controllers/tours');
        var wishlists = require('../controllers/wishlists');

        // app.get('/api/atm/example/anyone', function (req, res) {
        //     res.send('Anyone can access this');
        // });

        // app.get('/api/atm/example/auth', requiresLogin, function (req, res) {
        //     res.send('Only authenticated users can access this');
        // });

        // app.get('/api/atm/example/admin', requiresAdmin, function (req, res) {
        //     res.send('Only users with Admin role can access this');
        // });

        app.get('/api/atm/', function (req, res) {
            res.send("Hey, you're talking to my API!!!!");
        });

        app.get('/api/atm/test', users.test);

        // Get a list of Tours
        app.get('/api/atm/tours', tours.all);

        app.get('/api/atm/wishlists', wishlists.all);

        app.get('/api/atm/test', wishlists.test);
    };
})();
