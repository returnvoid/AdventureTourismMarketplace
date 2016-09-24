(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(Atm, app, auth, database, circles) {

        var requiresAdmin = circles.controller.hasCircle('admin');
        var requiresLogin = circles.controller.hasCircle('authenticated');

        app.get('/api/atm/example/anyone', function(req, res) {
            res.send('Anyone can access this');
        });

        app.get('/api/atm/example/auth', requiresLogin, function(req, res) {
            res.send('Only authenticated users can access this');
        });

        app.get('/api/atm/example/admin', requiresAdmin, function(req, res) {
            res.send('Only users with Admin role can access this');
        });

        app.get('/', function(req, res) {
            Atm.render('index', {
                package: 'atm'
            }, function(err, html) {
              res.send(html);
            });
        });
    };
})();
