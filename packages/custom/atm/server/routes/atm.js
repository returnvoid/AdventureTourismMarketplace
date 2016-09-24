(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(Atm, app, auth, database) {

        app.get('/api/atm/activities/featured', function(req, res) {
            Atm.render('index', {
                package: 'atm'
            }, function(err, response) {
              console.log('Req');
              res.jsonp(response);
            });
        });
    };
})();
