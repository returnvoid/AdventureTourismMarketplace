var mongoose = require('mongoose'),
    Giveaways = mongoose.model('Giveaways'),
    Entries = mongoose.model('Entries'),
    _ = require('lodash');

exports.all = function(req, res) {
    Giveaways.find().exec(function(err, giveaways) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(giveaways);
        }
    });
};

exports.show = function(req, res, next) {
    Giveaways.findOne({_id: req.params.id}).exec(function(err, giveaway) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(giveaway);
        }
    });
};
