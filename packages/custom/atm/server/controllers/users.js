var mongoose = require('mongoose'),
    Users = mongoose.model('Users'),
    _ = require('lodash');

exports.test = function(req, res) {
    Users.find().exec(function(err, users) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(users);
        }
    });
}