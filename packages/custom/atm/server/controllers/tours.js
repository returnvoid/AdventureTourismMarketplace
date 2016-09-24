var mongoose = require('mongoose'),
    Tours = mongoose.model('Tours'),
    _ = require('lodash');

exports.all = function(req, res) {
    Tours.find().exec(function(err, tours) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(tours);
        }
    });
}