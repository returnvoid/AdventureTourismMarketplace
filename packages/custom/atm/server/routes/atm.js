(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(Atm, app, auth, database) {

        var users = require('../controllers/users');
        var tours = require('../controllers/tours');
        var wishlists = require('../controllers/wishlists');
        var giveaways = require('../controllers/giveaways');
        var entries = require('../controllers/entries');

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

        // Giveaways
        app.get('/api/atm/giveaways', giveaways.all);
        app.get('/api/atm/giveaways/:id', giveaways.show);

        app.get('/api/atm/entries', entries.all);
        app.post('/api/atm/giveaways/:id/enter', entries.create);
    };
})();
