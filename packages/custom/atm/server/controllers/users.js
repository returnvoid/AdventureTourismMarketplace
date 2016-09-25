var mongoose = require('mongoose'),
    Users = mongoose.model('Users'),
    _ = require('lodash');

exports.all = function(req, res) {
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

exports.show = function(req, res, next) {
    Users.findOne({_id: req.params.id}).exec(function(err, users) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(users);
        }
    });
};