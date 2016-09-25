(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(Atm, app, auth, database) {

        var users = require('../controllers/users');
        var tours = require('../controllers/tours');
        var wishlists = require('../controllers/wishlists');

        app.get('/api/atm/test', function (req, res) {
            res.send("Hey, you're talking to my API!!!!");
        });

        // Tours
        app.get('/api/atm/tours', tours.all);
        app.get('/api/atm/tours/:id', tours.show);

        // Wishlists
        app.get('/api/atm/wishlists', wishlists.all);
        app.get('/api/atm/wishlists/:id', wishlists.show);
        app.post('/api/atm/wishlists', wishlists.create);
        app.put('/api/atm/wishlists/:id', wishlists.update);

        // Users
        app.get('/api/atm/users', users.all);
        app.get('/api/atm/users/:id', users.show);

    };
})();
